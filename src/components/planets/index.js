import React, {Fragment} from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet name="Mercury"
                    description="Mercury is the smallest and innermost planet in the Solar System, orbiting the Sun every 87.969 Earth days. Its orbit has the greatest eccentricity and its axis has the smallest inclination in relation to the plane of orbit among all the planets in the Solar System."
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    link="https://en.wikipedia.org/wiki/Mercury_(planet)"
            />
            <Planet name="Pluto"
                    description="Pluto, formally designated 134340 Pluto, is a dwarf planet in the Solar System and the ninth largest and tenth most massive object observed directly orbiting the Sun. It is the smallest and innermost planet in the Solar System, orbiting the Sun every 87.969 Earth days. Its orbit has the greatest eccentricity and its axis has the smallest inclination in relation to the plane of orbit among all the planets in the Solar System."
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
                    link="https://en.wikipedia.org/wiki/Pluto"
            />
        </Fragment>
    );
}

export default Planets;