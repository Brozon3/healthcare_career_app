import { Container, OverlayTrigger, Popover } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HSDiplomaPathsImage() {
    return (
        <Container fluid className="pt-5 mt-5">
            <h1 className="text-center purple-text py-2 my-2">
                <em>Hover</em> or <em>Click</em> to explore
            </h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={"95vw"}
                height={"80vh"}
                className="ge-export-svg-dark"
                style={{
                filter: "invert(100%) hue-rotate(180deg)",
                }}
                viewBox="-0.5 -0.5 381 461"
            >
                <defs>
                <style>
                    {
                    "svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),svg.ge-export-svg-dark svg{filter:invert(100%) hue-rotate(180deg)}"
                    }
                </style>
                </defs>
                <NavLink to={"/highschool"}>
                    <circle
                        cx={80}
                        cy={240}
                        r={80}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                    />
                </NavLink>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 58,
                        height: 1,
                        paddingTop: 240,
                        marginLeft: 51,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 36,
                            }}
                        >
                            {"Diploma"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                
                </switch>
                <NavLink to={"/diplomalessthan3yearprograms"}>
                    <OverlayTrigger
                        placement={"right"}
                        overlay={
                            <Popover>
                                <Popover.Header>Less Than 3 Year Programs</Popover.Header>
                                <Popover.Body>
                                    <ul>
                                        <li>Pharmacy Tech</li>
                                        <li>Practical Nursing</li>
                                        <li>Primary Care Paramedicine</li>
                                        <li>Rehabilitation Assistant OTA/PTA</li>
                                    </ul>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <circle
                            cx={320}
                            cy={60}
                            r={60}
                            fill="#ffcce6"
                            stroke="#000"
                            pointerEvents="all"
                        />    
                    </OverlayTrigger>
                </NavLink>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 58,
                        height: 1,
                        paddingTop: 60,
                        marginLeft: 291,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"< 3 Years"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <NavLink to={"/diploma3yearprograms"}>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Popover>
                                <Popover.Header>3 Year Programs</Popover.Header>
                                <Popover.Body>
                                    <ul>
                                        <li>Diagnostic Ultrasonography</li>
                                        <li>Medical Laboratory Technology</li>
                                        <li>Medical Radiography</li>
                                        <li>Respiratory Therapy</li>
                                    </ul>
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <circle
                            cx={320}
                            cy={400}
                            r={60}
                            fill="#ffcce6"
                            stroke="#000"
                            pointerEvents="all"
                        />    
                    </OverlayTrigger>
                </NavLink>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 58,
                        height: 1,
                        paddingTop: 400,
                        marginLeft: 291,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"3 Years"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 245v-10h33.4l40 160h6.6v-10.5l19 15.5-19 15.5V405h-14.4l-40-160Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M240.5 395v-10.5l19 15.5-19 15.5V405"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 245v-10h25.49l40-180h14.51V44.5l19 15.5-19 15.5V65h-6.49l-40 180Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M240.5 55V44.5l19 15.5-19 15.5V65"
                pointerEvents="all"
                />
            </svg>
        </Container>
    )
}

export default HSDiplomaPathsImage;