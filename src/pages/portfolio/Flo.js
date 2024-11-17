import React from 'react';
import './Flo.css';
import transition from '../../Transition.js';

import flo__cover from './img/Flo__cover.png';
import flo__slide from './img/Flo__slide.png';
import flo__persona from './img/Flo__Persona.png';
import flo__journey from './img/Flo__Journey.png';
import flo__midfi from './img/Flo__midfi.png';
import flo__sol from './img/flo_sol.gif';
import flo__sol1 from './img/flo_sol1.gif';
import flo__final__slide from './img/flo__final__slide.png';

const Flo = () => {
    return (
        <div className="design">
            <div className="background">
                <section id="background__up"></section>
                <section id="background__down"></section>
                <section id="background__left"></section>
                <section id="background__right"></section>
            </div>

            <main className="design__main">
                <div class="design__container">
                    <div class="wrapper">
                                <div class="design__flo__section" id="flo">
                                    <div className="design__flo__container container">
                                        <div className="design__flo__content--intro">
                                            <div className="design__roblox__content--half">
                                                <div className="design__roblox__content--container-left">
                                                    <div className="design__flo__content--text">
                                                        <div className="design__flo__content--text-name">Flo App</div>
                                                        <div className="design__flo__content--text-type">UX/UI Redesign // Portfolio</div>
                                                    </div>
                                                </div>
                                                <div className="design__roblox__content--container-right">
                                                    <div className="design__flo__content--img">
                                                        <img src={flo__cover}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content">
                                            <div className="design__flo__content--description-header">At-a-Glance 👀</div>
                                            <div className="design__flo__content--description">
                                            As a member of the Design Innovation Club at the University of Illinois at Urbana-Champaign, I worked on a five-month project to redesign the Flo mobile app, a comprehensive period tracking and holistic health platform. Flo helps users track their periods, symptoms, fertility chances, and baby’s growth, while also providing insights into body signals and evidence-based health articles.  In this project, I was responsible for the UI design of the onboarding process as part of the broader UX work done by my team. Our goal was to make the app more inclusive and enhance its usefulness by refining the paywall structure, ultimately improving the overall user experience.                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Problem</div>
                                            <div className="design__roblox__content--description">
                                            By marketing itself as a female health app, Flo excludes individuals beyond the female binary, hindering accessibility to a diverse user base. Alongside this, Flo’s current paywall structure diminishes the user experience by restricting access to beneficial health resources.
                                            <ul class="design__roblox__content--description--points">
                                                <li>👉🏻 The app aggressively promotes the premium subscription, which can be off-putting to users and overall hindering the user experience.
                                                </li>
                                                <li>👉🏻 There is confusion regarding the reasoning behind certain features being behind a paywall, particularly when entire pages of content are inaccessible without a premium subscription.
                                                </li>
                                                <li>👉🏻 The app's branding heavily relies on stereotypical feminine imagery and colors, excluding individuals who do not identify within the female binary.
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content">
                                            <div className="design__flo__content--description-header">Solution</div>
                                            <div className="design__flo__content--description">
                                            Together with my team, we developed a prototype for the Flo redesign, focusing on enhancing the user experience. My specific contributions included streamlining the onboarding process to make it faster and more inclusive, as well as initiating a new color palette to reflect broader inclusivity throughout the app.                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content--half">
                                            <div className="design__flo__content--container-left">
                                                <div className="design__flo__content--subimg">
                                                    <img src={flo__sol} alt="loading..." />
                                                </div>
                                            </div>

                                            <div className="design__flo__content--container-right">
                                                <div className="design__flo__content--description-header">Inclusive Gender-Neutral Design</div>
                                                
                                                <ul className="design__flo__content--description--points-align">
                                                    <li>1. Fluid Design Elements: Incorporate shapes inspired by organic blobs to represent the fluidity of periods and inclusivity.
                                                    </li>
                                                    <li>2. Personalized Identity Options: Ask for pronouns and gender identity right from the start to create a personalized experience.
                                                    </li>
                                                    <li>3. Diverse Color Palette and Motion: Use fluid color gradients and subtle animations to represent the dynamic nature of periods. Avoid traditional "girly" themes (e.g., pink flowers) in favor of inclusive, gender-neutral design choices.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content--half">
                                            <div className="design__flo__content--container-left">
                                                <div className="design__flo__content--description-header">Clear Clinical Terms with Simple Explanations</div>
                                                
                                                <ul className="design__flo__content--description--points-align">
                                                    <li>1. Brief Definitions: When users select an option, provide a brief explanation of any clinical term to ensure that even those unfamiliar with the terminology, such as new period users, can easily understand.
                                                    </li>
                                                    <li>2. Learn More Option: Include an information icon next to clinical terms so users can access more detailed information if desired, making the experience both educational and accessible.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="design__flo__content--container-right">
                                                <div className="design__flo__content--subimg">
                                                    <img src={flo__sol1} alt="loading..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content--half">
                                            <div className="design__flo__content--container-left">
                                                <div className="design__flo__content--subimg">
                                                    <img src={flo__sol} alt="loading..." />
                                                </div>
                                            </div>

                                            <div className="design__flo__content--container-right">
                                                <div className="design__flo__content--description-header">Streamlined, User-Friendly Onboarding Process</div>
                                                
                                                <ul className="design__flo__content--description--points-align">
                                                    <li>1. Short and Focused Question Sets: To address feedback about onboarding being too long, break the process into three short sections:
                                                    </li>
                                                        <li>Section 1: Basic identity questions like pronouns and gender identity—quick and to the point.
                                                        </li>
                                                        <li>Section 2: Essential period-related questions (e.g., last period, period goals) needed for the app to function properly.
                                                        </li>
                                                        <li>Section 3: Optional questions about interests and concerns, offering a skip option for users who want to move through the process faster or don’t need personalized feed recommendations.
                                                        </li>
                                                    <li>2. Flexibility for Users: Allow users to skip individual questions or skip directly to the end if they’re short on time.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="design__flo__content--slide">
                                            <img src={flo__slide}/>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Process</div>
                                            <div className="design__roblox__content--description">
                                                After conducting user interviews and researching the current state of the Flo mobile app, I collaborated with my team to identify key pain points and brainstorm improvement ideas. We created user personas to better understand our audience, guiding us in sketching wireframes. This process evolved from low-fidelity designs to the development of a high-fidelity prototype, all aimed at enhancing the user experience.
                                            </div>

                                            <div className="design__roblox__content--half">
                                                <div className="design__roblox__content--container-left">
                                                    <div className="design__roblox__content--description-header">User Interviews</div>
                                                    <ul className="design__roblox__content--description--points-align">
                                                        <li>How important is it for the app to use gender-neutral language and imagery?
                                                        </li>
                                                        <li>Would you appreciate the ability to customize the app's content to align with your gender identity?
                                                        </li>
                                                        <li>Which features do you consider essential and should be available for free to all users?
                                                        </li>
                                                        <li>How important is it for you to have a transparent understanding of what features are free and which ones require a subscription?
                                                        </li>
                                                        <li>Is your health information privacy a concern for you? Why or why not?
                                                        </li>
                                                        <li>What features and aspects of a tracking cycle app would make you feel more comfortable in sharing and inputting your health information into?
                                                        </li>
                                                </ul>
                                                </div>
                                                <div className="design__roblox__content--container-right">
                                                <div className="design__roblox__content--description-header">Insights</div>
                                                    <ul className="design__roblox__content--description--points-align">
                                                        <li>The limited representation in the app, particularly for non-cisgender individuals, emphasizes the importance of fostering inclusivity to create a welcoming and diverse user environment.
                                                        </li>
                                                        <li>Users primarily utilize the app for period tracking, neglecting other features such as symptom and mood tracking, period-analyses, and informational articles.
                                                        </li>
                                                        <li>The frequent appearance of the paywall not only frustrates users but also underscores a broader reluctance to invest in additional features.
                                                        </li>
                                                        <li>Users prioritize clarity in distinguishing between free and paid features, emphasizing the importance of transparent communication.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="design__flo__container container">
                                                <div className="design__flo__content">
                                                    <div className="design__flo__content--description-header">User Persona & User Journey</div>
                                                    <div className="design__flo__content--persona-img">
                                                        <img src={flo__persona}/>
                                                    </div>
                                                    <div className="design__flo__content--journey-img">
                                                        <img src={flo__journey}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="design__flo__container container">
                                                <div className="design__flo__content">
                                                    <div className="design__flo__content--description-header">Wireframes</div>
                                                    <div className="design__flo__content--midfi-img">
                                                        <img src={flo__midfi}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container container">
                                        <div className="design__flo__content">
                                            <div className="design__flo__content--description-header">Final Design</div>
                                            <div className="design__flo__content--description">
                                                The Flo app redesign prioritizes a gender-neutral theme with customizable colors, clearer paywall transparency using lock icons, and a more efficient period logging process. These updates enhance inclusivity, accessibility, and overall user experience.                                            </div>
                                            <div className="design__flo__content--slide">
                                                <img src={flo__final__slide}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__flo__container-end container">
                                        <div className="design__flo__content">
                                            <div className="design__flo__content--description-header">What I Learned 💐</div>
                                            <div className="design__flo__content--description">
                                                During the Flo redesign project, I learned how to make period tracking apps more inclusive, moving away from stereotypically feminine designs to cater to diverse users. I also gained insight into balancing design with business needs, ensuring transparency with paywalls to build trust and avoid negative user experiences. To enhance the premium version's appeal, I explored adding valuable features like private sessions with doctors. Additionally, I developed hard skills in prototyping animations in Figma, including working with gradient backgrounds and linking interactive elements. This project strengthened my proficiency in complex prototyping and animation.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default transition(Flo);