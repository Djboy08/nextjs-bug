

export const revalidate = 30;
export const dynamic = 'force-static'

export default async function Page({ params: { slug } }) {
    // wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (<div>Bugged page, slug:{slug}</div>)
}