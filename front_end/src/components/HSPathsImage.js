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
                <path fill="none" d="M50 345h60v30H50z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={80}
                    x={51}
                    y={322}
                />
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

                
                <path fill="none" d="M410 345h60v30h-60z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={41}
                    x={411}
                    y={341.5}
                />
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
                
                <path fill="none" d="M410 65h60v30h-60z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={41}
                    x={411}
                    y={61.5}
                />
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
                
                <path fill="none" d="M410 625h60v30h-60z" pointerEvents="all" />
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
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={58}
                    height={41}
                    x={411}
                    y={621.5}
                />
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