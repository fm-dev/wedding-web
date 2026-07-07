import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';


export default function TimeLine() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                date="2026"
            >
                <h3 className="vertical-timeline-element-title">
                    Project Started
                </h3>

                <p>
                    Mulai development app
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date="2027"
            >
                <h3 className="vertical-timeline-element-title">
                    Launch App
                </h3>

                <p>
                    Release production
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}