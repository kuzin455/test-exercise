export default async function fetchDeclensionWord(word) {
    const res = await fetch(`https://cityninja.ru/morpher/${word}`)
        .then(res => res.json())
        .catch(err => {
            throw new Error(err)
        })
    return res
}

