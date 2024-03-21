import { Container, OverlayTrigger, Popover, Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";

//hard-coded Degree Programs Image
function DegreeProgramsImage() {

    const spring = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        config: { duration: 1000 }
    })

    return (
        <Container fluid className="pt-5 mt-5">
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    <h1 className="text-center purple-text py-2 my-2">
                        <em>Hover</em> or <em>Click</em> to explore
                    </h1>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    <animated.svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={"60vw"}
                        height={"40vh"}
                        className="ge-export-svg-dark"
                        style={{
                            filter: "invert(100%) hue-rotate(180deg)",
                            ...spring
                        }}
                        viewBox="-0.5 -0.5 526 161"
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
                                cy={80}
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
                                paddingTop: 80,
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
                                        fontSize: 36,
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

                        <OverlayTrigger
                            placement="right"
                            trigger={"click"}
                            rootClose={"true"}
                            overlay={
                                <Popover>
                                    <Popover.Header>MUN Degree Programs</Popover.Header>
                                    <Popover.Body>This diagram will be replaced with diagram displaying MUN programs and any other degree programs that are applicable.</Popover.Body>
                                </Popover>
                            }
                        >
                            <rect
                                width={180}
                                height={100}
                                x={345}
                                y={30}
                                fill="#ffcce6"
                                stroke="#000"
                                pointerEvents="all"
                                rx={15}
                                ry={15}
                            />           
                        </OverlayTrigger>
                        
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
                                width: 178,
                                height: 1,
                                paddingTop: 80,
                                marginLeft: 346,
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
                                    {"MUN Degree Programs"}
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
                        d="M160.5 85V75h165V64.5l19 15.5-19 15.5V85H190Z"
                        pointerEvents="all"
                        />
                        <path
                        fill="none"
                        stroke="#000"
                        d="M325.5 75V64.5l19 15.5-19 15.5V85"
                        pointerEvents="all"
                        />
                    </animated.svg>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default DegreeProgramsImage;