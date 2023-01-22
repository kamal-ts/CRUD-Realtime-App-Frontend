import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl my-4">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="my-4 font-bold text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}