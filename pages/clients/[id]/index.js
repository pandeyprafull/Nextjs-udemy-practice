import { useRouter } from "next/router";

function ClientProjectPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        //load data ...
        router.push({
            pathname: '/clients/[id]/[clientProjectid]',
            query: { id: 'max', clientProjectid: 'projecta' }
        })
    }
    return (
        <div>
            <h1>The Projects of Given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectPage;