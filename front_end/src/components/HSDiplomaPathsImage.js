import { Container, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
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
                
                <path fill="none" d="M50 225h60v30H50z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={46}
                    x={51}
                    y={219}
                />
                </switch>
                <NavLink to={"/diplomalessthan3yearprograms"}>
                    <OverlayTrigger
                        placement={"right"}
                        overlay={
                            <Popover>
                                <Popover.Header>Diploma Programs Less Than 3 Years</Popover.Header>
                                <Popover.Body>
                                    <ul>
                                        <li>Pharmacy Tech</li>
                                        <li>Emergency Medical Responder</li>
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
                
                <path fill="none" d="M290 45h60v30h-60z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={61}
                    x={291}
                    y={31.5}
                />
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
                                        <li>Medical Lab Technology</li>
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
                
                <path fill="none" d="M290 385h60v30h-60z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={61}
                    x={291}
                    y={371.5}
                />
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