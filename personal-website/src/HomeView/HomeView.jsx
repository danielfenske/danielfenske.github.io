// children components
import NavBar from '../NavBar/NavBar';

function HomeView() {
    return (
        <>
            <NavBar />
            <div className="viewContainer">
                <div className="aboutContainer">
                    <h1>hey there,</h1>
                    <h2>... my name's Dan</h2>
                    <p>I'm an avid sport's enthusiast, I never turn down a good challenge,
                        and, according to my wife, I'm a nerd when it comes to anything tech.
                    </p>
                </div>
                <div className="ctaButton">
                    <button className="primaryBtn">portfolio</button>
                </div>
            </div>
        </>
    )
}

export default HomeView;