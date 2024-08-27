import ManageSignIn from "@/Components/ManageSignIn";

export const metadata = {
    title: 'Sign In | Techfacts Central',
    description: 'Sign In/Log In page - techfacts central.',
    keywords: 'techfacts central, signin techfacts central, techfacts central login, techfacts central account',
    author: 'Sparsh Pandya',
    openGraph: {
        title: 'Sign In | Techfacts Central',
        description: 'Sign In/Log In to your account - techfacts central.'
    }
}

export default function SignIn() {
    return (
        // rendering the component on client side
        <ManageSignIn />
    )
}