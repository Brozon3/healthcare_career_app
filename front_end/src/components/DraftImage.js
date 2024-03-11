import { Container, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { useSpring, animated } from "react-spring";


function DraftImage({hideCertificates={hideCertificates}, hideDiplomas={hideDiplomas},
                     hideRequiresPhysics={hideRequiresPhysics}, hideRequiresChemsitry={hideRequiresChemsitry},
                     hideLessThanFiftyThousand={hideLessThanFiftyThousand}, hideLessThanThreeYears={hideLessThanThreeYears}}) {

    const spring = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        config: { duration: 1000 }
    })

    return (
        <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width={"80vw"}
            height={"75vh"}
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 1447.013 543.687"
            style={{...spring}}
        >
            {!hideDiplomas && <path
                d="m1274.145 580.224-2.6-2.4c-3.4-3.2-4.3-7.6-2.4-12 1.4-3.4 5.8-6.7 8.8-6.7 1.6 0 3.1-5 5.3-17 .9-4.7 2.1-11.1 2.7-14.3 1-5.5 1-5.8-1.3-8-1.4-1.2-3-3.6-3.7-5.3-1.8-4.3.4-9.7 5.3-12.5 3.2-1.9 3.5-2.5 3.5-6.7 0-2.6.3-10.4.7-17.4l.6-12.8H1259.745v-5l17.8.2 17.7.3-.3 19.8-.3 19.7 3.5 3.4c3.1 2.9 3.6 4 3.6 7.9 0 3.7-.5 5.1-3.1 7.6-1.7 1.7-3.9 3.1-4.9 3.1-1.5 0-2.1 1.6-3.5 9.8-1.6 9.6-2.2 12.7-4.6 22.9-1.2 5-1.1 5.4 1 7.6 5.2 5.6 2.201 15.398-4.899 18.198z"
                style={{
                    fill: "#00f",
                    strokeWidth: 0.1
                }}
                transform="translate(-126.6 -37.812)"
                className="non-comp-diplomas"
            />}
            {!hideCertificates && <path
                d="M5730 8837c-14-7-36-29-49-50-20.131-32.019-6.404 9.325-19.528-76.88 8 3 13.528-21.12 22.528-35.12 22-34 77-57 114-49 32 8 71 41 82 70 8 19 19 22 119 28 61 4 116 4 121 1 6-4 10-69 10-161v-154h50l-2 183-3 182-147-1c-141-1-146 0-156 21-11 23-68 55-99 55-10 0-29-6-43-13z"
                style={{
                    fill: "#3A3F91",
                }}
                transform="matrix(.1 0 0 -.1 102.71 885.077)"
                className="comp-certs"
            />}
            {!hideDiplomas && <path
                d="M8720 7785c0-76 45-119 124-117l51 1 162-163c161-160 163-163 163-206 0-62 36-107 94-115 31-5 50-15 64-33 11-15 47-63 81-107 33-44 64-85 69-91s22-30 37-55c16-24 32-47 38-50 5-4 5-14-2-27-33-63 5-134 84-156 44-13 53-26 166-245 60-116 61-126 25-153-5-3-9-28-9-54 0-43 4-51 38-81 23-20 49-33 65-33 25 0 29-8 63-97 20-54 46-128 58-165l23-67-26-24c-34-32-43-76-24-120 14-34 58-67 88-67 16 0 31-50 53-170 9-47 21-111 27-143 10-55 10-58-13-80-14-12-30-36-37-53-18-43 4-97 53-125 32-19 35-25 35-67 0-26 3-104 7-174l6-128h-313v-50l178 2 177 3-3 198-3 197 35 34c31 29 36 40 36 79 0 37-5 51-31 76-17 17-39 31-49 31-15 0-21 16-35 98-16 96-22 127-46 229-12 50-11 54 10 76 52 56 32 147-39 175-38 14-41 19-69 106-16 50-43 127-60 170-28 72-29 81-15 97 21 23 29 83 15 117-14 32-58 62-93 62-20 0-30 13-63 82-22 45-63 123-92 174s-53 98-53 106c0 7 9 24 20 38s20 36 20 50c0 65-81 130-137 109-14-5-29-6-32-2-3 5-25 36-48 68-23 33-65 89-93 125s-62 81-76 101l-25 36 22 37c19 33 20 42 10 76-20 68-85 97-154 71-23-9-38 3-191 155-149 149-165 168-155 186 14 27 5 85-18 110-10 11-33 26-52 34-31 13-38 13-74-5l-39-19z"
                style={{
                    fill: "#00f",
                }}
                transform="matrix(.1 0 0 -.1 102.71 885.077)"
                className="comp-diplomas"
            />}
            <path
                d="M6067 7915c-42-53-77-102-77-109 0-8 8-17 18-21 12-5 29 7 62 45 25 28 48 50 53 50 4 0 7-26 7-57 0-118.633 1.49-114.293-12.037-247-1.373-132.932 5.088-199.152-3.938-356l9.975-511-7-257.994c.755-253.164-2.996-115.124 3-271.006 7.881-204.897-3.065-405.964 0-629v-129c0-141 0-142-60-142-47 0-180-46-250-87-36-21-100-72-142-114-97-97-160-219-186-358l-17-91h-210c-201.5 0-334.017 4.675-485 0H2885l54 48c39 35 53 53 48 65-3 9-14 17-24 17-15 0-91-56-190-140-23-19-14-34 50-84 34-28 79-63 99-79 31-25 40-28 53-17 25 21 18 36-35 77-27 21-49 41-50 46 420.516-5.33 839.368.694 1243 7h1332l18-92c40-203 154-366 324-466 64-38 173-77 238-86l150-12 70 12c282 48 492 249 561 537 8 31 13 61 13 65-7 43-11 42 221 42h1120c411.552 3.68 773.11 0 1199 0h76l-59-53c-56-50-67-77-31-77 22 0 195 149 189 163-10 21-177 147-196 147-32 0-20-24 39-77l58-52-77-1H6840v33c-1 47-32 167-61 232-23 52-78 134-122 182-109 119-256 192-439 218l-38 6v892c0 208.609 12.765 326.378 0 532v505c0 186.786 8.433 387.044 0 603l1 72 20-25c76-92 101-107 107-64 3 22-136 204-156 204-4 0-42-43-85-95z"
                style={{
                    fill: "#1a1a1a",
                }}
                transform="matrix(.1 0 0 -.1 102.71 885.077)"
                className="middle"
            />
            {!hideCertificates && <path
                d="M2497 4730c-51-28-77-73-77-134 0-80 48-136 130-151 43-7 113 26 144 68 29 39 29 125 0 163-52 70-129 91-197 54zM1994 4603c-4-14-4-106 0-204 6-168 5-179-13-188-29-16-54-78-47-115 6-34 38-70 78-90l102 19c68 58 56 162-21 194-29 12-30 15-37 94-3 45-6 121-6 170v87h310v60h-360z"
                style={{
                    fill: "green",
                }}
                transform="matrix(.1 0 0 -.1 102.71 885.077)"
                className="non-comp-certs"
            />}
            <g
                style={{
                    fill: "#000",
                }}
            >
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    x={1305.691}
                    y={470.81}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#00f",
                        fillOpacity: 1,
                        fillRule: "nonzero",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan x={1305.691} y={470.81} className="unclickable">
                        {"Diploma"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresPhysics && <text
                    xmlSpace="preserve"
                    x={1213.197}
                    y={247.384}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1213.197}
                        y={247.384}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Diagnostic Sonographer"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    x={1174.79}
                    y={196.551}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1174.79}
                        y={196.551}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Medical Laboratory Technologist"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    x={1241.437}
                    y={304.994}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1241.437}
                        y={304.994}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Respiratory Therapist"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    x={1259.511}
                    y={361.474}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1259.511}
                        y={361.474}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Paramedic"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresPhysics && <text
                    xmlSpace="preserve"
                    x={1123.958}
                    y={145.719}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1123.958}
                        y={145.719}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Medical Radiological Technologist"}
                    </tspan>
                </text>}

                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    x={1292.269}
                    y={578.358}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1292.269}
                        y={578.358}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Rehabilitation Assistant"}
                    </tspan>
                </text>}
                
                {!hideCertificates && <text
                    xmlSpace="preserve"
                    x={372.77}
                    y={439.417}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "green",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={372.77}
                        y={439.417}
                        style={{
                            fill: "green",
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Certificate"}
                    </tspan>
                </text>}

                {!hideCertificates && <text
                    xmlSpace="preserve"
                    x={857.026}
                    y={56.163}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#fd5",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={857.026}
                        y={56.163}
                        style={{
                            fill: "#3A3F91",
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Certificate"}
                    </tspan>
                </text>}

                {!hideCertificates && !hideLessThanFiftyThousand && <text
                    xmlSpace="preserve"
                    x={181.767}
                    y={519.619}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={181.767}
                        y={519.619}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Personal Care Attendant"}
                    </tspan>
                </text>}

                {!hideCertificates && !hideLessThanFiftyThousand && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    x={504.447}
                    y={56.811}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={504.447}
                        y={56.811}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Medical Laboratory Assistant"}
                    </tspan>
                </text>}

                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    x={1273.151}
                    y={421.878}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1273.151}
                        y={421.878}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Casper Exam"}
                    </tspan>
                </text>}

                {!hideDiplomas && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    x={1304.695}
                    y={524.137}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#000",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={1304.695}
                        y={524.137}
                        style={{
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"Practical Nurse"}
                    </tspan>
                </text>}

                <text
                    xmlSpace="preserve"
                    x={418.039}
                    y={180.142}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        whiteSpace: "pre",
                        inlineSize: 86.5186,
                        display: "inline",
                        fill: "#fff",
                        strokeWidth: 0.75
                    }}
                    transform="translate(273.28 225.387)"
                >
                    <tspan x={418.039} y={180.142} className="unclickable">
                        {"High"}
                    </tspan>
                </text>
                
                <text
                    xmlSpace="preserve"
                    x={811.142}
                    y={485.136}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "Sans",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#fff",
                        strokeWidth: 0.75
                    }}
                    transform="translate(-126.6 -37.812)"
                >
                    <tspan
                        x={811.142}
                        y={485.136}
                        style={{
                            fill: "#fff",
                            strokeWidth: 0.75,
                        }}
                        className="unclickable"
                    >
                        {"School"}
                    </tspan>
                </text>
            </g>
            <g transform="translate(-126.6 -37.812)">

            {!hideDiplomas && <OverlayTrigger
                placement="right"
                overlay={
                    <Popover>
                        <Popover.Header>Diploma</Popover.Header>
                        <Popover.Body>
                            Obtaining a diploma typically requires less time and financial investment compared to 
                            pursuing a degree, making it a more accessible option for many individuals. Diplomas 
                            often provide hands-on training and practical skills directly applicable to specific 
                            industries, offering a quicker path to entry-level positions or career advancement. 
                            Additionally, diplomas can be a strategic choice for those seeking specialized 
                            knowledge and immediate employment opportunities in fields such as healthcare, 
                            trades, or technology.
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1205.264}
                    cy={463.325}
                    rx={14.685}
                    ry={14.402}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.97788,
                    }}
                />            
            </OverlayTrigger>}
            
            {!hideDiplomas && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header>Casper Admissions Exam</Popover.Header>
                        <Popover.Body>
                            <b>Link to Exam: </b> <a href="https://acuityinsights.app/">Casper Exam</a>
                            <hr/>
                            <b>Learn More: </b> <a href="https://www.youtube.com/watch?v=wkbSXYLre8o">Casper Introduction</a>
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1257.176}
                    cy={414.741}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />          
            </OverlayTrigger>}
            
            <OverlayTrigger
                placement="top"
                overlay={
                    <Popover>
                        <Popover.Header>English</Popover.Header>
                        <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            English 3201 (Minimum 60%)
                            <hr/>
                            English 3202 (Minimum 60%)
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={943.006}
                    cy={463.832}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />          
            </OverlayTrigger>
            
            {!hideDiplomas && !hideRequiresChemsitry && <OverlayTrigger
                placement="left"
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
                <ellipse
                    cx={1245.572}
                    cy={355.846}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}

            {!hideDiplomas && !hideRequiresChemsitry && <OverlayTrigger
                placement="left"
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
                <ellipse
                    cx={1290.957}
                    cy={511.516}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideDiplomas && !hideRequiresChemsitry && !hideLessThanThreeYears && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header>Respiratory Therapist</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $77,521
                                    <hr/>
                                    <b>Program Name: </b> Respitory Therapy
                                    <hr/>
                                    <b>Program Length: </b> 3 Years
                                    <hr/>
                                    <b>Certification: </b> Diploma
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/respiratory-therapy">Link</a>
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1226.369}
                    cy={301.49}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideDiplomas && !hideRequiresPhysics && !hideLessThanThreeYears && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header>Diagnostic Sonographer</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $78,843
                                    <hr/>
                                    <b>Program Name: </b> Diagnostic Ultrasonography
                                    <hr/>
                                    <b>Program Length: </b> 3 Years
                                    <hr/>
                                    <b>Certification: </b> Diploma
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/diagnostic-ultrasonography#tab2">Link</a>
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
                                    Physics 3204
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1199.258}
                    cy={245.355}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideDiplomas && !hideRequiresChemsitry && !hideLessThanThreeYears && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header>Medical Laboratory Technologist</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $73,864
                                    <hr/>
                                    <b>Program Name: </b> Medical Laboratory Technology
                                    <hr/>
                                    <b>Program Length: </b> 3 Years
                                    <hr/>
                                    <b>Certification: </b> Diploma
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-laboratory-technology">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <b>Competitive Entry</b>
                                    <hr/>
                                    English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                    <hr/>
                                    Biology 2201 (Minimum 60%)
                                    <hr/>
                                    Biology 3201 (Minimum 60%)
                                    <hr/>
                                    Chemistry 3202 (Minimum 60%)
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1161.334}
                    cy={193.472}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresPhysics && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header>Medical Radiation Technologist</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $76,031
                                    <hr/>
                                    <b>Program Name: </b> Medical Radiography
                                    <hr/>
                                    <b>Program Length: </b> 3 Years
                                    <hr/>
                                    <b>Certification: </b> Diploma
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-radiography">Link</a>
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
                                    Physics 3204
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1111.914}
                    cy={144.759}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideCertificates && !hideLessThanFiftyThousand && !hideRequiresChemsitry && <OverlayTrigger
                placement="left"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header as="h1">Medical Laboratory Assistant</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $47,240
                                    <hr/>
                                    <b>Program Name: </b> Medical Laboratory Assistant
                                    <hr/>
                                    <b>Program Length: </b> 1 Year
                                    <hr/>
                                    <b>Certification: </b> Certificate
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-laboratory-assistant#tab2">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                    <hr/>
                                    Biology 2201 (Minimum 60%)
                                    <hr/>
                                    Biology 3201 (Minimum 60%)
                                    <hr/>
                                    Chemistry 3202 (Minimum 60%)
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
                                    2 credits chosen from any of the remaining 3000 level courses offered in the Senior High School Program
                                </Tab>
                            </Tabs>
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={806.934}
                    cy={49.509}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#3A3F91",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideCertificates && <OverlayTrigger
                placement="right"
                overlay={
                    <Popover>
                        <Popover.Header as="h1">Certificate</Popover.Header>
                        <Popover.Body>
                            Choosing a certificate program over a diploma often provides the opportunity 
                            to gain expertise in a specific skill or area of study in a shorter timeframe. 
                            Certificates are highly focused, allowing individuals to quickly acquire 
                            specialized knowledge and credentials to meet the demands of specific 
                            industries or job roles. Additionally, certificate programs are often 
                            flexible, offering online or part-time options, making them convenient for 
                            individuals balancing work or other commitments while seeking to enhance their 
                            skill set. 
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={844.727}
                    cy={102.15}
                    rx={15.673}
                    ry={15.108}
                    style={{
                        fill: "#3A3F91",
                        strokeWidth: 1.03472,
                    }}
                />         
            </OverlayTrigger>}
            
            {!hideDiplomas && <OverlayTrigger
                placement="left"
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
                <ellipse
                    cx={1279.209}
                    cy={570.485}
                    rx={11.296}
                    ry={11.014}
                    style={{
                        fill: "#00f",
                        strokeWidth: 0.75,
                    }}
                />         
            </OverlayTrigger>}
            
            <OverlayTrigger
                placement="top"
                overlay={
                    <Popover>
                        <Popover.Header>Math</Popover.Header>
                        <Popover.Body>
                        <b>See program specific requirements to ensure eligibility</b>
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1023.24}
                    cy={463.284}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />        
            </OverlayTrigger>
            
            <OverlayTrigger
                placement="top"
                overlay={
                    <Popover>
                        <Popover.Header>Science</Popover.Header>
                        <Popover.Body>
                        <b>See program specific requirements to ensure eligibility</b>
                        <hr/>
                        Biology 2201
                        <hr/>
                        Biology 3201
                        <hr/>
                        Chemistry 3202
                        <hr/>
                        Physics 3204
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={1107.321}
                    cy={463.179}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />        
            </OverlayTrigger>
            
            <OverlayTrigger
                placement="left"
                overlay={
                    <Popover>
                        <Popover.Header>English</Popover.Header>
                        <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            English 3201 (Minimum 60%)
                            <hr/>
                            English 3202 (Minimum 60%)
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={844.02}
                    cy={362.197}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />        
            </OverlayTrigger>
            
            <OverlayTrigger
                placement="left"
                overlay={
                    <Popover>
                        <Popover.Header>Math</Popover.Header>
                        <Popover.Body>
                        <b>See program specific requirements to ensure eligibility</b>
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
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={844.943}
                    cy={276.374}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />          
            </OverlayTrigger>
            
            <OverlayTrigger
                placement="left"
                overlay={
                    <Popover>
                        <Popover.Header>Science</Popover.Header>
                        <Popover.Body>
                        <b>See program specific requirements to ensure eligibility</b>
                        <hr/>
                        Biology 2201
                        <hr/>
                        Biology 3201
                        <hr/>
                        Chemistry 3202
                        <hr/>
                        Physics 3204
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={844.177}
                    cy={187.91}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "#666",
                        strokeWidth: 0.778312,
                    }}
                />          
            </OverlayTrigger>
            
            {!hideCertificates && <OverlayTrigger
                placement="top"
                overlay={
                    <Popover>
                        <Popover.Header as="h1">Certificate</Popover.Header>
                        <Popover.Body>
                            Choosing a certificate program over a diploma often provides the opportunity 
                            to gain expertise in a specific skill or area of study in a shorter timeframe. 
                            Certificates are highly focused, allowing individuals to quickly acquire 
                            specialized knowledge and credentials to meet the demands of specific 
                            industries or job roles. Additionally, certificate programs are often 
                            flexible, offering online or part-time options, making them convenient for 
                            individuals balancing work or other commitments while seeking to enhance their 
                            skill set. 
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={485.986}
                    cy={463.113}
                    rx={15.673}
                    ry={15.108}
                    style={{
                    fill: "green",
                    strokeWidth: 1.03472,
                    }}
                />          
            </OverlayTrigger>}

            <text
                xmlSpace="preserve"
                x={856.891}
                y={369.916}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
            >
                <tspan
                    x={856.891}
                    y={369.916}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#1a1a1a",
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"English"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={858.908}
                y={-602.205}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
                transform="rotate(62.5)"
            >
                <tspan
                    x={858.908}
                    y={-602.205}
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        fontStretch: "normal",
                        fontSize: 24,
                        fontFamily: "sans-serif",
                        InkscapeFontSpecification: "&quot",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontVariantNumeric: "normal",
                        fontVariantEastAsian: "normal",
                        fill: "#1a1a1a",
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"English"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={859.15}
                y={285.195}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
            >
                <tspan
                    x={859.15}
                    y={285.195}
                    style={{
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"Math"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={924.012}
                y={-633.771}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
                transform="rotate(60)"
            >
                <tspan
                    x={924.012}
                    y={-633.771}
                    style={{
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"Math"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={859.15}
                y={197.086}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
            >
                <tspan
                    x={859.15}
                    y={197.086}
                    style={{
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"Science"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                x={967.043}
                y={-706.54}
                style={{
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: 400,
                    fontStretch: "normal",
                    fontSize: 24,
                    fontFamily: "sans-serif",
                    InkscapeFontSpecification: "&quot",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    fill: "#1a1a1a",
                    strokeWidth: 0.75
                }}
                transform="rotate(60)"
            >
                <tspan
                    x={967.043}
                    y={-706.54}
                    style={{
                        strokeWidth: 0.75,
                    }}
                    className="unclickable"
                >
                    {"Science"}
                </tspan>
            </text>
            
            {!hideCertificates && !hideLessThanFiftyThousand && <OverlayTrigger
                placement="right"
                trigger={"click"}
                rootClose={"true"}
                overlay={
                    <Popover>
                        <Popover.Header as="h1">Personal Care Attendant</Popover.Header>
                        <Popover.Body>
                            <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $41,246
                                    <hr/>
                                    <b>Program Name: </b> Personal Care Attendant
                                    <hr/>
                                    <b>Program Length: </b> 2 Semesters
                                    <hr/>
                                    <b>Certification: </b> Certificate
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/personal-care-attendant">Link</a>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <ul>
                                        <li>Grade 12 diploma <b>OR</b> Grade 12 equivalency documentation.</li>
                                        <li>Current Certificate of Conduct including the “Vulnerable Sector Check”</li>
                                        <li>2 reference letters supporting entrance into the program. References may be provided by individuals such as: employers, teachers/instructors or representative from a volunteer agency</li>
                                        <li>Perform 20 volunteer service hours within the past two years. Volunteer service may include, but is not limited to: Community agencies, School programs, Church groups or Charitable organizations</li>
                                        <li>Complete a one page written personal statement addressing one of the following: Reason(s) for interest in the program, Personal characteristics/skills/abilities that applicants bring to the program or Knowledge gained from volunteer experience(s)</li>
                                        <li>The School of Health Science Student Information Program Awareness Form</li>
                                        <li>The Newfoundland and Labrador Student Pre-Placement Immunization and Communicable Diseases Screening Form</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                        </Popover.Body>
                    </Popover>
                }
            >
                <ellipse
                    cx={432.57}
                    cy={511.252}
                    rx={11.861}
                    ry={11.296}
                    style={{
                        fill: "green",
                        strokeWidth: 0.778312
                    }}
                />          
            </OverlayTrigger>}
            
            </g>
        </animated.svg>
    );
}

export default DraftImage;