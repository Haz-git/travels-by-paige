import { createClient } from '../prismicio';

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const page = await client.getByUID('page', 'home');

    return {
        props: { page }, // Will be passed to the page component as props
    };
}
