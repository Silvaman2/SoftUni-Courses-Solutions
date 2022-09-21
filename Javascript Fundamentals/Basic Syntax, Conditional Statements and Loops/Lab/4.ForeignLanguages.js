function ForeignLangauges(country) {
    let language = "unknown";

    switch(country) {
        case "USA":
        case "England":
            language = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            break;
    }
    console.log(language);
}