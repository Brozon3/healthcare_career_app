import { Container, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HSPathsImage() {

    return (
        <Container fluid className="pt-5 mt-5">
            <h1 className="text-center purple-text py-2 my-2"><em>Hover</em> or <em>Click</em> to explore!</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={"95vw"}
                height={"80vh"}
                className="ge-export-svg-dark"
                style={{
                filter: "invert(100%) hue-rotate(180deg)",
                }}
                viewBox="-0.5 -0.5 521 721"
            >
                <defs>
                <style>
                    {
                    "svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),svg.ge-export-svg-dark svg{filter:invert(100%) hue-rotate(180deg)}"
                    }
                </style>
                </defs>
                <circle
                    cx={80}
                    cy={360}
                    r={80}
                    fill="#ffcce6"
                    stroke="#000"
                    pointerEvents="all"
                />

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
                            paddingTop: 360,
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
                        <font>
                            <font
                                style={{
                                    fontSize: 32,
                                }}
                            >
                            {"High School"}
                            </font>
                            <br />
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>
                
                <NavLink to={"/hsdiploma"}>
                    <OverlayTrigger
                        placement={"right"}
                        overlay={
                            <Popover>
                                <Popover.Header>Diploma</Popover.Header>
                                <Popover.Body>
                                    <b>Length: </b> 1 to 3 Years
                                    <hr/>
                                    <b>Salary: </b> $50,000 to $75,000
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <circle
                            cx={440}
                            cy={360}
                            r={80}
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
                        paddingTop: 360,
                        marginLeft: 411,
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
                        <font>
                            <font
                            style={{
                                fontSize: 32,
                            }}
                            >
                            {"Diploma"}
                            </font>
                            <br />
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <NavLink to={"/degreeprograms"}>
                    <OverlayTrigger
                        placement={"right"}
                        overlay={
                            <Popover>
                                <Popover.Header>Degree</Popover.Header>
                                <Popover.Body>
                                    <b>Length: </b> 3+ Years
                                    <hr/>
                                    <b>Salary: </b> $75,000+
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <circle
                            cx={440}
                            cy={80}
                            r={80}
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
                        paddingTop: 80,
                        marginLeft: 411,
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
                        <font>
                            <font
                            style={{
                                fontSize: 32,
                            }}
                            >
                            {"Degree"}
                            </font>
                            <br />
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <NavLink to={"/certprograms"}>
                    <OverlayTrigger
                        placement={"right"}
                        overlay={
                            <Popover>
                                <Popover.Header>Certificate</Popover.Header>
                                <Popover.Body>
                                    <b>Length: </b> Less than 1.5 Years
                                    <hr/>
                                    <b>Salary: </b> $45,000 to $75,000
                                </Popover.Body>
                            </Popover>
                        }
                    >
                        <circle
                            cx={440}
                            cy={640}
                            r={80}
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
                        paddingTop: 640,
                        marginLeft: 411,
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
                        <font>
                            <font
                            style={{
                                fontSize: 32,
                            }}
                            >
                            {"Certificate"}
                            </font>
                            <br />
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
                d="M160.5 365v-10h26.41l140-280h13.59V64.5l19 15.5-19 15.5V85h-7.41l-140 280Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 75V64.5l19 15.5-19 15.5V85"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 365v-10h32.59l140 280h7.41v-10.5l19 15.5-19 15.5V645h-13.59l-140-280Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 635v-10.5l19 15.5-19 15.5V645"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 365v-10h180v-10.5l19 15.5-19 15.5V365H190Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 355v-10.5l19 15.5-19 15.5V365"
                pointerEvents="all"
                />
            </svg>  
        </Container>
        
    )
  
}
export default HSPathsImage;