import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";

export default function WebProjects(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Typography variant={"h2"} component={"h2"}>
                Scène 3
            </Typography>
            <Container>
                <Slider {...settings}>
                    <div>
                        <Typography variant={"h3"}>
                            Test 1
                        </Typography>
                        <Typography variant={"h3"}>
                            Carousel 1
                        </Typography>
                    </div>
                    <div>
                        <Typography variant={"h3"}>
                            Test 1
                        </Typography>
                        <Typography variant={"h3"}>
                            Carousel 2
                        </Typography>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}