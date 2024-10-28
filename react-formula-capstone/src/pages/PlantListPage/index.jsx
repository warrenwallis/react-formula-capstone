import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";

const PlantListPage = () => {
    return (
        <RedirectToSignInIfSignedOut>
            <div>
                <NavBar />
            </div>
        </RedirectToSignInIfSignedOut>
    );
};

export default PlantListPage;