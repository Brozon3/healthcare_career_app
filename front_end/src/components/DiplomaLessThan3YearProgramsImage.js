import { Container, OverlayTrigger, Popover, Tabs, Tab, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function DiplomaLessThan3YearProgramsImage() {
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
                viewBox="-0.5 -0.5 541 521"
            >
                <defs>
                <style>
                    {
                    "svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),svg.ge-export-svg-dark svg{filter:invert(100%) hue-rotate(180deg)}"
                    }
                </style>
                </defs>
                <NavLink to={"/hsdiploma"}>
                    <circle
                        cx={80}
                        cy={260}
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
                        paddingTop: 260,
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
                            {"< 3 Years"}
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
                            <Popover.Header>Pharmacy Technician</Popover.Header>
                            <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b>
                                    <hr/>
                                    <b>Program Name: </b> Pharmacy Technician
                                    <hr/>
                                    <b>Program Length: </b> 2 Years
                                    <hr/>
                                    <b>Certification: </b> Diploma
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/pharmacy-technician#tab2">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <b>Program Highlights</b>
                                    <ul>
                                        <li>Intense training to become an integral part of the healthcare team</li>
                                        <li>The program is seeking accreditation by Accreditation Canada</li>
                                        <li>Prepares you to challenge the Sonography Canada certification exam</li>
                                        <li>Sonography Canada provides portability within Canada</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
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
                        paddingTop: 50,
                        marginLeft: 361,
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
                            {"Pharmacy Technician"}
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
                            <Popover.Header>Nurse</Popover.Header>
                            <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                <b>Average Salary: </b> $68,140
                                        <hr/>
                                        <b>Program Name: </b> Practical Nursing
                                        <hr/>
                                        <b>Program Length: </b> 19 Months
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/practical-nursing">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <b>Program Highlights</b>
                                    <ul>
                                        <li>Intense training to become an integral part of the healthcare team</li>
                                        <li>The program is seeking accreditation by Accreditation Canada</li>
                                        <li>Prepares you to challenge the Sonography Canada certification exam</li>
                                        <li>Sonography Canada provides portability within Canada</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={140}
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
                        paddingTop: 190,
                        marginLeft: 361,
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
                            {"Nurse"}
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
                            <Popover.Header>Paramedic</Popover.Header>
                            <Popover.Body>
                                <Tabs>
                                    <Tab eventKey={"pcp"} title={"Primary"}>
                                        <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                            <Tab eventKey={"details"} title={"Details"}>
                                            <b>Average Salary: </b> $74,131
                                        <hr/>
                                        <b>Program Name: </b> Primary Care Paramedicine
                                        <hr/>
                                        <b>Program Length: </b> 68 Weeks
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/primary-care-paramedicine">Link</a>
                                            </Tab>
                                            <Tab eventKey={"requirements"} title={"Requirements"}>
                                                <b>Additional Requirements:</b>
                                                <ul>
                                                    <li>
                                                        2 additional credits from any of the remaining 3000 level courses offered 
                                                        in the Senior High School Program.
                                                    </li>
                                                </ul>
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                    <Tab eventKey={"acp"} title={"Advanced"}>
                                        <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                            <Tab eventKey={"details"} title={"Details"}>
                                            <b>Average Salary: </b> $74,131
                                        <hr/>
                                        <b>Program Name: </b> Advanced Care Paramedicine
                                        <hr/>
                                        <b>Program Length: </b> 4 Semesters
                                        <hr/>
                                        <b>Certification: </b> Post-Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/advanced-care-paramedicine">Link</a>
                                            </Tab>
                                            <Tab eventKey={"requirements"} title={"Requirements"}>
                                                
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={280}
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
                        paddingTop: 330,
                        marginLeft: 361,
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
                            {"Paramedic"}
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
                            <Popover.Header>Rehabilitation Assistant</Popover.Header>
                            <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                <b>Average Salary: </b> $51,438
                                        <hr/>
                                        <b>Program Name: </b> Rehabilitation Assistant
                                        <hr/>
                                        <b>Program Length: </b> 9 Semesters
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/rehabilitation-assistant">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <b>Program Highlights</b>
                                    <ul>
                                        <li>Intense training to become an integral part of the healthcare team</li>
                                        <li>The program is seeking accreditation by Accreditation Canada</li>
                                        <li>Prepares you to challenge the Sonography Canada certification exam</li>
                                        <li>Sonography Canada provides portability within Canada</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={420}
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
                        paddingTop: 470,
                        marginLeft: 361,
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
                            {"Rehabilitation Assistant"}
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
                d="M160.5 265v-10h26.82l140-210h13.18V34.5l19 15.5-19 15.5V55h-7.82l-140 210Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 45V34.5l19 15.5-19 15.5V55"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h28.32l140-70h11.68v-10.5l19 15.5-19 15.5V195h-9.32l-140 70Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 185v-10.5l19 15.5-19 15.5V195"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h32.18l140 210h7.82v-10.5l19 15.5-19 15.5V475h-13.18l-140-210Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 465v-10.5l19 15.5-19 15.5V475"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h30.68l140 70h9.32v-10.5l19 15.5-19 15.5V335h-11.68l-140-70Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 325v-10.5l19 15.5-19 15.5V335"
                pointerEvents="all"
                />
            </svg>
        </Container>
    )
}

export default DiplomaLessThan3YearProgramsImage;