import { Container, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";

//hard-coded Less Than 3 Year Diploma Programs Image
function DiplomaLessThan3YearProgramsImage() {

    const spring = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        config: { duration: 1000 }
    })

    return (
        <Container fluid className="pt-5 mt-5">
            <h1 className="text-center purple-text py-2 my-2">
                <em>Hover</em> or <em>Click</em> to explore
            </h1>
            <animated.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={"95vw"}
                height={"80vh"}
                className="ge-export-svg-dark"
                style={{
                    filter: "invert(100%) hue-rotate(180deg)",
                    ...spring
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
                                        <b>Average Salary: </b> $54,579
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
                                        <ul>
                                            <li>Requirements</li>
                                            <li>To</li>
                                            <li>Be</li>
                                            <li>Announced</li>
                                            <li>At</li>
                                            <li>A</li>
                                            <li>Later</li>
                                            <li>Date</li>
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
                            <Popover.Header>Practical Nurse</Popover.Header>
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
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201
                                        <hr/>
                                        Biology 2201 <b>AND</b> Biology 3201 
                                        <br/>
                                        <b>OR</b> 
                                        <br/>
                                        Chemistry 3202
                                        <hr/>
                                        Math 3200 <b>OR</b> Math 3201
                                        <hr/>
                                        One of the following:
                                        <ul>
                                            <li>Social Studies 3201 <b>OR</b> equivalent</li>
                                            <li>Sciences Humaines 3231</li>
                                            <li>2 credits at the 3000 level in Religious Studies, French or other MCL</li>
                                        </ul>
                                        <hr/>
                                        2 credits in any subject area at the 3000 level
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
                            {"Practical Nurse"}
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
                                                <b>Competitive Entry</b>
                                                <hr/>
                                                English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                                <hr/>
                                                Biology 2201 
                                                <hr/>
                                                Biology 3201 
                                                <hr/>
                                                Chemistry 3202
                                                <hr/>
                                                4 credits from:
                                                <br/>
                                                <b>Advanced: </b>
                                                <ul>
                                                    <li>Math 2200 (Minimum 50%)</li>
                                                    <li>Math 3200 (Minimum 50%)</li>
                                                </ul>
                                                <b>Academic: </b>
                                                <ul>
                                                    <li>Math 2201 (Minimum 50%)</li>
                                                    <li>Math 3201 (Minimum 60%)</li>
                                                </ul>
                                                <hr/>
                                                Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a>
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
                                                <ul>
                                                    <li>Completion of a paramedic diploma or certificate with successful completion of national COPR examination (PCP) or provincial equivalent</li>
                                                    <li>Completion of a comprehensive entrance exam covering prerequisite PCP knowledge and skills administered by CNA as a pre-assessment and indicator of a student's PCP knowledge base</li>
                                                    <li>Minimum of one-year experience (1,900 hours) as a Primary Care Paramedic</li>
                                                    <li>Hold and maintain an active license to practice as a PCP in the province of NL for the duration of the program</li>
                                                </ul>
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
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        4 credits from:
                                        <ul>
                                            <li>Biology 2201</li>
                                            <li>Biology 3201</li>
                                            <li>Physics 3204</li>
                                            <li>Chemistry 3202</li>
                                            <li>Earth Systems 3209</li>
                                        </ul>
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        2 credits from any of the remaining 3000 level courses offered in the Senior High School Program
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
            </animated.svg>
        </Container>
    )
}

export default DiplomaLessThan3YearProgramsImage;