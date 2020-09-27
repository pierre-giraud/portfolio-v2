import React, {useEffect, useState} from "react";
import Welcome from "../components/Welcome";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useShowOnScroll = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(top > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {window.removeEventListener("scroll", handleScroll);}
    }, []);

    return visible;
};

const useStyles = makeStyles(() =>({
    content: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        minHeight: '100vh'
    }
}));

export default function Home() {
    const visible = useShowOnScroll();
    const classes = useStyles();

    return (
        <>
            <div>
                {/*{visible && <Navbar/>}*/}
                <div className={classes.content}>
                    <Welcome/>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                    <p>oe</p>
                </div>
            </div>
        </>
    )
}
