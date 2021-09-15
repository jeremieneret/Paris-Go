export const arrayElementTagger = (tags) => {
    return (
        tags.map((tag) => {return tag = ' #' + tag})
    )
};