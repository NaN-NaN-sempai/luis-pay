<script>
    import translations from "$trad";    

    let languages = [];
    let summarized = [];
    //languages.push({name:"NO", level:"❌"});

    const setupImports = (array, glob) => {
        for (const [path, module] of Object.entries(glob)) {        
            array.push(module.default);
        }
    }
    /* languages */
    setupImports(languages, import.meta.glob('$lang/*.js', { eager: true }));
    /* summarized languages */
    setupImports(summarized, import.meta.glob('$lang/summarized/*.js', { eager: true }));

    const moveItemArr = (array, callback, toIndex) => {
        const index = array.findIndex(callback);

        if (index !== -1 && toIndex >= 0 && toIndex < array.length) {
            const [objectToMove] = array.splice(index, 1);

            array.splice(toIndex, 0, objectToMove);
        }

        return array;
    }

    moveItemArr(languages, ({name}) => name == "PT", 0);
    let defaultLanguage = languages.find(({name}) => name == "EN");

    
    
    let selectedLanguage = "EN";

    const setupLocalStorage = () => {
        const userLanguage = navigator.language || navigator.userLanguage;
        const userLanguageCode = userLanguage.split('-')[0].toUpperCase();

        let preSelectedLanguage;
        if(languages.find(({name}) => name == userLanguageCode)){
            preSelectedLanguage = userLanguageCode

        } else {
            console.warn("Detected language code ("+userLanguageCode+") isn't implemented, default ("+selectedLanguage+") is being used instead.");
            preSelectedLanguage = selectedLanguage;
        }
        
        console.groupCollapsed("Avaliable languages ↓");
        console.log("Detected language: ("+userLanguageCode+")");
        console.table(languages);
        console.groupEnd();

        console.groupCollapsed("Avaliable summarized languages ↓");
        console.warn("If theres no summarized text, the not summarized version will be used.");
        console.warn("If theres no text for the selected language, the default language (EN) will be used.");
        
        console.table(summarized);
        console.groupEnd();

        console.groupCollapsed("Language variables ↓");
        console.table({userLanguageCode, "localStorage.language": localStorage.getItem("language"), selectedLanguage, preSelectedLanguage});
        console.groupEnd();
        

        selectedLanguage = localStorage.getItem("language") || preSelectedLanguage;
        
        localStorage.setItem("language", selectedLanguage);
    }

    const setLanguage = (lang) => {
        selectedLanguage = lang;
        localStorage.setItem("language", lang);
    } 

    const dispatch = () => {
        const translationProxy = (translations, translationsSummarized={}, fallbackTranslations={}, translationsSelected=translations) => {
            return new Proxy(translations, {
                get(target, key) {
                    //console.log(key, key in target, key in translationsSummarized, target[key]);
                    
                    // if its sumerizing and sumerized language exists
                    if (summerizing && translationsSummarized && key in translationsSummarized) {
                        const summarizedValue = translationsSummarized[key];                        
                        if (typeof summarizedValue === 'object' && summarizedValue !== null) {
                            return translationProxy(summarizedValue, summarizedValue, fallbackTranslations[key] || {}, translations[key] || {});
                        }
                        return summarizedValue;
                    }

                    // if key exists in selected language
                    if (key in translationsSelected) {
                        const value = translationsSelected[key];
                        if (typeof value === 'object' && value !== null) {
                            return translationProxy(value, translationsSummarized[key] || {}, fallbackTranslations[key] || {}, value);
                        }
                        return value;
                    }

                    //  if it does'nt exists it goes to the fallback
                    if (key in fallbackTranslations) {
                        const fallbackValue = fallbackTranslations[key];
                        if (typeof fallbackValue === 'object' && fallbackValue !== null) {
                            return translationProxy(fallbackValue, {}, {}, {});
                        }
                        return fallbackValue;
                    }
                }
            });
        }

        let selLang = languages.find(({name}) => name == selectedLanguage) || defaultLanguage;
        
        let summarizedLang = summarized.find(({name}) => name == selectedLanguage);
        let fallbackLang = translationProxy(selLang, summarizedLang, defaultLanguage);

        if(summarizedLang == undefined && summerizing) popupWarn.show(fallbackLang.content.noSummarized.text);

        translations.set(fallbackLang.content);
    }

    const saveCheck = (element) => {
        let {target} = element;
        
        document.querySelectorAll(".selectLanguageInput").forEach(el => {
            el.checked = el == target;
        });

        setLanguage(target.id);

        dispatch();
    }


    import summarize from '$lib/summarize';
    let summerizing;

    import { onMount } from "svelte";
    onMount(() => {
        setupLocalStorage();

        const params = new URLSearchParams(location.hash.substring(1));
        if(params.get('lang')){
            let paramLang = params.get('lang').toUpperCase();

            if(languages.map(({name}) => name).includes(paramLang)){
                console.warn(`Using parametrized language: ${paramLang}`);
                selectedLanguage = paramLang;
            }
        }        

        dispatch();

        summarize.subscribe(value => {
            summerizing = value;
            dispatch();
        });
    });
    

    import Button from "$components/Button.svelte";
    import PopupWarn from "$components/PopupWarn.svelte";
    let popupWarn;
</script>

<PopupWarn bind:this={popupWarn}/>

<div class="switch">
    {#each languages as language}
        <input type="checkbox" class="selectLanguageInput" id={language.name} checked={selectedLanguage==language.name} on:input={saveCheck}>
        <label class="switch__label" for={language.name}>
            <div class="text">
                {#if selectedLanguage == language.name}
                    {language.level}
                {/if}
                {language.name}
            </div>
        </label>
    {/each}
</div>

<style lang="scss">
    /*
    Thanks to Murray Nuttall on CodePen
    https://codepen.io/irunatbullets/pen/MWwyVOw
    */

    @use "$style/palette";
    @use "$style/_cursors.scss" as curosrs;

    .switch {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        position: relative;
        filter: drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25));
    }

    .selectLanguageInput {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    .switch__label {
        position: relative;
        display: inline-block;
        width: 80px;
        height: 40px;
        background: palette.$secondary;
        border: 5px solid palette.$iconbg;
        border-radius: 9999px;
        cursor: curosrs.$languages, auto;
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);

        .text {
            color: palette.$switchTextColor;
            text-transform: capitalize;
            font-weight: bold;
            font-size: large;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }


    .selectLanguageInput:checked + .switch__label {
        background: palette.$skyBlue;
        border-color: palette.$highlight;

        .text {
            color: palette.$switchTextColor__checked;
        }
    }

    * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    *:focus {
        outline: none !important;
    }
</style>