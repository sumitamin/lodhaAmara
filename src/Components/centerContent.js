import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Content = () => {
return (

    <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    FAQs
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div itemscope="" itemtype="https://schema.org/FAQPage">
                        <div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul><li itemprop="name">Where is Amara by Lodha?</li></ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br/>Amara by Lodha is perfectly located on Kolshet Road in Prime Central Thane, minutes away from major social hotspots and business centres.&nbsp;<br/>&nbsp;</p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">What is Life at Amara like?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br />The budding community at Amara is active &amp; already beaming with joy of owning their dream home, enriching every event with their wholehearted participation. Amara Utsav, Amara Master Chef, Amara Premier League are some of the marquee events of Amara.&nbsp; Check out the latest update here:&nbsp;<a href="https://www.lodhagroup.in/lifeatamara/index.php">https://www.lodhagroup.in/lifeatamara/index.php</a>&nbsp;&nbsp;&nbsp;<br />&nbsp;</p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">What are the finishes provided in a home at Amara?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br />Amara provides spacious homes with gleaming floors, elegant European-style fitments, and wide windows that command unmatchable views.&nbsp;• Stylish, air-conditioned residences.* • Floor-to-ceiling windows** for ample natural light and sweeping views.&nbsp; • European-style bath fittings by Roca, Kohler and Jaquar# • Optimal space planning, with wardrobe space in every bedroom, and separate storeroom and utility areas.** *Except in kitchen, passage and bathroom. **In select residences only.&nbsp;#Or equivalent.<br/></p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">What all amenities are provided at Amara?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br/>
                                    <strong>Amara provides the below amenites :</strong><br/>
                                    <br/>
                                    A 5,000 sq. ft. gym, indoor sports courts and multiple swimming pools, including a covered ladies pool<br/>
                                    6 clubhouses, including the sprawling 25,000 sq. ft. main clubhouse<br/>
                                    Indoor and outdoor party venues, including a poolside deck<br/>
                                    Lively poolside café<br/>
                                    A private theatre minus the ticket queue<br/>
                                    Play village<br/>
                                    Aromatic garden and grove<br/>
                                    Barbeque areas and dining enclaves for impromptu dinner parties<br/>
                                    Jungle gym<br/>
                                    Private forest with pavilions and a machanMini-amphitheatre<br/>
                                    A lantern garden for magical evenings<br/>
                                    A cosy hammock garden<br/>
                                    An art and sculpture garden<br/>
                                    Picnic niches at your doorstep<br/>
                                    Splash pads<br/>
                                    A sacred garden<br/>
                                    Tree house<br/>
                                    A Jain temple<br/>
                                    A Ganesha temple<br/>
                                    A grand sports arena<br/>
                                    Almost 30 acres of open space with sports facilities<br/>
                                    Walking trails, including a boardwalk, canopy walk and woodland trail<br/>
                                    A landscape dappled with lawns and wetland gardens<br/>
                                    Outdoor decks for meditation, tai chi, yoga and Pilates<br/></p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">Are there any OC homes available in Amara?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br/>Select OC Ready Homes are available at Lodha Amara. For more details, please drop your number on the website, our representative will get in touch with you.<br/></p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">Is the Club Amara open 24x7?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                    <p itemprop="text"><br/>
                                    Below are the timings for Club Amara.<br/>
                                    Swimming pools - 7:00 AM to 9:00 PM.<br/>
                                    Gym- 6:30 AM to 10:00 PM<br/>
                                    Cluster Clubhouse 6:30 AM to 10 PM<br/>
                                    Entrance pavilion - 7:00 AM to 9:00 PM<br/>
                                    Sports arena - 7:00 AM to 10:00 PM<br/>
                                    Cricket ground - 7:00 AM to 11:00 AM &amp; 5:00 PM&nbsp; to 10:00 PM<br/>
                                    Others- 7:00 AM to 10:00 PM<br/></p>
                                </div>
                            </div>
                            <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                                <ul>
                                    <li itemprop="name">How well is Amara connected to other parts of the city?</li>
                                </ul>
                                <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                                <p itemprop="text"><br/>
                                Situated in prime central Thane, Amara is conveniently close to the buzzing places in Thane as well as enjoys close proximity to several IT and corporate offices. Excellent road and rail network offers easy connectivity with every part of Mumbai.<br/>
                                Chhatrapati Shivaji International Airport ~45 mins<br/>
                                BKC ~50 mins<br/>
                                Borivali ~20 mins<br/>
                                Vikhroli ~25 mins<br/>
                                Thane station ~6 km<br/>
                                Proposed Kasarvadavali Metro Station ~5 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Amara RERA Number
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div class="accordCont" >
                        <p>Amara has been registered via MahaRERA registration number: Tower 1-5,7-19: P51700001065 | Tower 26,27,28,30,34,35: P51700001031|Tower 29,31: P51700000981 | Tower 32,33: P51700001030 | Tower 36,37: P51700013961 | Tower 6,22: P51700014760 | Tower 20,21: P51700016961 | Tower 45: P51700018593 | Tower 46: P51700018579 | Tower-38, 39 : P51700018393 are available on the website<strong>&nbsp;<span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><a href="https://maharera.mahaonline.gov.in/">https://maharera.mahaonline.gov.in</a></span></span></span></span></span></span></span></span></span>&nbsp;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></strong><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>under registered projects.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>

                        <p>RERA is an iconic act that aims to bring transparency and efficiency in the real estate sector, protect consumers, and fast track dispute resolution. It is an act that promotes good&nbsp;governance in the market,&nbsp;which helps customers get more information about projects and reduces the risk associated with the purchase.&nbsp;</p>

                        <p>The MahaRERA Registration Number is the mark of integrity, and all new Lodha Group projects are RERA compliant;&nbsp;<a href="http://www.lodhagroup.com/lodha-group-rera">see a list of our RERA projects here</a><a href="https://www.lodhagroup.in/lodha-group-maharera">.&nbsp;</a></p>

                        <p>To find out more&nbsp;about what is RERA,&nbsp;<a href="https://www.lodhagroup.in/what-is-rera">Click Here</a>.</p>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
)
}

export default Content