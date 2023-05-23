

export default async function Page({ params: { slug } }) {
    // wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (<div>Normal Page, slug: {slug}</div>)
}