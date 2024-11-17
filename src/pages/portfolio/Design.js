import React from 'react';
import './Design.css';
import transition from '../../Transition.js';

import roblox__cover from './img/Roblox_intro.png';
import roblox__gamequiz from './img/RobloxGameQuiz.png';
import roblox__gamequiz_slide from './img/RobloxGameQuizSlide.png';
import roblox__customization from './img/RobloxCustomization.png';
import roblox__customization_slide from './img/RobloxCustomizationSlide.png';
import roblox__customization_before from './img/RobloxCustomizationBefore.png';
import roblox__search from './img/RobloxSearch.png';
import roblox__search_slide from './img/RobloxSearchSlide.png';
import roblox__search_before from './img/RobloxSearchBefore.png';
import roblox__persona from './img/RobloxPersona.png';
import roblox_journey from './img/RobloxUserJourney.png';
import roblox_midfi from './img/RobloxMidFidelity.png';

const Design = () => {
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
                                <div class="design__roblox__section" id="roblox">
                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content--intro">
                                            <div className="design__roblox__content--text">
                                                <div className="design__roblox__content--text-name">Roblox Mobile App</div>
                                                <div className="design__roblox__content--text-type">UX/UI Redesign // Portfolio</div>
                                            </div>
                                            <div className="design__roblox__content--img">
                                                <img src={roblox__cover}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">At-a-Glance 👀</div>
                                            <div className="design__roblox__content--description">
                                            In 2023, I had the opportunity to work with the Design Innovation Club at the University of Illinois at Urbana-Champaign for a duration of five months. I undertook the challenging task of redesigning the Roblox mobile app by modernizing interface, with a strong emphasis on personalization for users. My contribution to this project was twofold: firstly, I developed an innovative feature, a game-curated quiz, designed to enhance user engagement. Secondly, I was responsible for revamping the UI of two key areas - the avatar customization and discovery pages, infusing them with a modern aesthetic while improving user experience.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Problem</div>
                                            <div className="design__roblox__content--description">
                                            The UI of the Roblox Mobile App is currently facing significant challenges. Its design feels outdated, and the interface suffers from cluttered components, making the overall browsing experience less user-friendly.

                                            <ul class="design__roblox__content--description--points">
                                                <li>👉🏻 Players choose games on a trial-and-error basis as filters and suggestions are mostly unhelpful or difficult to use.
                                                </li>
                                                <li>👉🏻 Players discover games mostly through word-of-mouth, but the platform lacks in friend game recommendations.
                                                </li>
                                                <li>👉🏻 Home and Discovery are disorganized and contain too many games at once, increasing the cognitive load.
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Solution</div>
                                            <div className="design__roblox__content--description">
                                            Together with my team, we developed a prototype for the Roblox redesign, focusing on enhancing user experience. My specific contributions included revamping the avatar customization, introducing a game-curated quiz for personalized engagement, and modernizing the search page.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content--half">
                                            <div className="design__roblox__content--container-left">
                                                <div className="design__roblox__content--subimg">
                                                    <img src={roblox__gamequiz}/>
                                                </div>
                                            </div>

                                            <div className="design__roblox__content--container-right">
                                                <div className="design__roblox__content--description-header">Game-Quiz</div>
                                                
                                                <ul className="design__roblox__content--description--points-align">
                                                    <li>1. Dynamic Quiz Development: Created a quiz to determine users' gaming personalities based on psychological aspects and gaming preferences.
                                                    </li>
                                                    <li>2. Quiz Content: Incorporated questions about preferred characters, paths, and companions in games, revealing individual gaming styles.
                                                    </li>
                                                    <li>3. Gaming Personality Analysis: Generated unique gaming personality types upon quiz completion, reflecting individual preferences and choices.
                                                    </li>
                                                    <li>4. Personalized Recommendations: Offered game feeds and recommendations tailored to users' gaming personality types, enhancing engagement and interest.
                                                    </li>
                                                    <li>5. Community Building: Enabled users to share their gaming personality types and feeds on social media, promoting community interaction and connections based on similar gaming interests.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="design__roblox__content--slide">
                                            <img src={roblox__gamequiz_slide}/>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content--half">
                                            <div className="design__roblox__content--container-left">
                                                <div className="design__roblox__content--description-header">Marketplace & Avatar Customization</div>
                                                
                                                <ul className="design__roblox__content--description--points-align">
                                                    <li>1. Avatar Redesign and Marketplace Enhancement: Modernized avatar customization, including new item and background color options. Added features such as 'like item' and improved search filters for an enhanced user experience.
                                                    </li>
                                                    <li>2. 'Free Items' Feature for New Users: Launched a section offering free items with color customization, targeting new or financially limited users to boost engagement.
                                                    </li>
                                                    <li>3. Customizable Interface Themes: Introduced personalized background colors and themes, making the interface more inviting and encouraging repeat user engagement.
                                                    </li>
                                                    <li>4. 'Like Item' Pages: Implemented a feature for users to save and revisit favored items, streamlining their purchasing process.
                                                    </li>
                                                    <li>5. Advanced Item Recommendations: Developed a system to suggest items based on user interactions and preferences, increasing the likelihood of users discovering appealing items.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="design__roblox__content--container-right">
                                                <div className="design__roblox__content--subimg">
                                                        <img src={roblox__customization}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="design__roblox__content--slide">
                                            <img src={roblox__customization_before}/>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content--half">
                                            <div className="design__roblox__content--container-left">
                                                <div className="design__roblox__content--subimg">
                                                        <img src={roblox__search}/>
                                                </div>
                                            </div>

                                            <div className="design__roblox__content--container-right">
                                                <div className="design__roblox__content--description-header">Discovery</div>
                                                
                                                <ul className="design__roblox__content--description--points-align">
                                                    <li>1. Discovery Page Redesign: Optimized for easier scrolling and efficient game finding, effectively reducing the need for endless scrolling.
                                                    </li>
                                                    <li>2. Featured Games Section: Introduced a special section to help new users quickly discover and select games.
                                                    </li>
                                                    <li>3. Game Personality Quiz: Implemented a quiz to assist users in identifying their gaming personality, leading to a more tailored game selection and personalized feed suggestions.
                                                    </li>
                                                    <li>4. Redesigned Game Categories: Updated game category layout to minimize endless scrolling and improve the browsing experience.
                                                    </li>
                                                    <li>5. Enhanced Search Functionality: Expanded search capabilities with additional filters, enabling users to find games, marketplace items, and friends more efficiently.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="design__roblox__content--slide">
                                            <img src={roblox__search_before}/>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Process</div>
                                            <div className="design__roblox__content--description">
                                                After conducting user interviews and researching the current state of the Roblox mobile app, I collaborated with my team to identify key pain points and brainstorm improvement ideas. We created user personas to better understand our audience, guiding us in sketching wireframes. This process evolved from low-fidelity designs to the development of a high-fidelity prototype, all aimed at enhancing the user experience.
                                            </div>

                                            <div className="design__roblox__content--half">
                                                <div className="design__roblox__content--container-left">
                                                    <div className="design__roblox__content--description-header">User Interviews</div>
                                                    <ul className="design__roblox__content--description--points-align">
                                                        <li>Describe yourself as a gamer
                                                        </li>
                                                        <li>Do you have a process when choosing games?
                                                        </li>
                                                        <li>What information is most important to you when finding games?
                                                        </li>
                                                        <li>Do you engage in different communities?
                                                        </li>
                                                        <li>Do you play with online or real life friends?
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="design__roblox__content--container-right">
                                                <div className="design__roblox__content--description-header">Insights</div>
                                                    <ul className="design__roblox__content--description--points-align">
                                                        <li>Players choose games on a trial-and-error basis as filters and suggestions are mostly unhelpful or difficult to use. 
                                                        </li>
                                                        <li>Players discover games mostly through word-of-mouth, but the platform lacks in friend game recommendations. 
                                                        </li>
                                                        <li>Home and Discovery are disorganized and contain too many games at once, increasing the cognitive load.
                                                        </li>
                                                        <li>The app is not players’ first choice in gaming and communication. In-app gaming is limiting and visually too small. 
                                                        </li>
                                                        <li>Users prefer the app for avatar customization and quick browsing.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="design__roblox__content--description-header">User Persona & User Journey</div>
                                            <img src={roblox__persona}/>
                                            <img src={roblox_journey}/>

                                            <div className="design__roblox__content--description-header">Wireframes</div>
                                            <div className="design__roblox__content--slide">
                                                <img src={roblox_midfi}/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="design__roblox__container container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">Final Design</div>
                                            <div className="design__roblox__content--description">
                                                After conducting user interviews and researching the current state of the Roblox mobile app, I collaborated with my team to identify key pain points and brainstorm improvement ideas. We created user personas to better understand our audience, guiding us in sketching wireframes. This process evolved from low-fidelity designs to the development of a high-fidelity prototype, all aimed at enhancing the user experience.
                                            </div>
                                            <div className="design__roblox__content--slide">
                                                <img src={roblox__gamequiz_slide}/>
                                            </div>
                                            <div className="design__roblox__content--slide">
                                                <img src={roblox__customization_slide}/>
                                            </div>
                                            <div className="design__roblox__content--slide">
                                                <img src={roblox__search_slide}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="design__roblox__container-end container">
                                        <div className="design__roblox__content">
                                            <div className="design__roblox__content--description-header">What I Learned 💐</div>
                                            <div className="design__roblox__content--description">
                                                During my involvement in the Roblox redesign project, I gained valuable insights into the significance of user experience and the critical process of data collection, a new aspect for me. I learned the skill of preserving the app's existing tone and style while integrating new features and concepts that align with its overall mood. Additionally, working within a UX team taught me the importance of regularly reviewing each other's designs to ensure theme consistency across the app and the value of collaboration.                                            
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

export default transition(Design);