import React from 'react'
import DOMPurify from 'dompurify'
import * as Scroller from 'react-scroll'


export default function TandC() {

    React.useEffect(() => {
        Scroller.animateScroll.scrollToTop()
      }, [])

        const tandcHTML = `<style>
        [data-custom-class='body'],
        [data-custom-class='body'] * {
            background: transparent !important;
        }
    
        [data-custom-class='title'],
        [data-custom-class='title'] * {
            
            font-size: 26px !important;
            color: #000000 !important;
        }
    
        [data-custom-class='subtitle'],
        [data-custom-class='subtitle'] * {
            
            color: #595959 !important;
            font-size: 14px !important;
        }
    
        [data-custom-class='heading_1'],
        [data-custom-class='heading_1'] * {
            
            font-size: 19px !important;
            color: #000000 !important;
        }
    
        [data-custom-class='heading_2'],
        [data-custom-class='heading_2'] * {
            
            font-size: 17px !important;
            color: #000000 !important;
        }
    
        [data-custom-class='body_text'],
        [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            
        }
    
        [data-custom-class='link'],
        [data-custom-class='link'] * {
            color: #3030F1 !important;
            font-size: 14px !important;
            
            word-break: break-word !important;
        }
    </style>
    
    <div data-custom-class="body" style="color: #FF731599 !important">
        <div align="center" style="text-align: left; line-height: 1;">
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div align="center" class="MsoNormal" style="text-align:center;line-height:150%;"><a
                        name="_2cipo4yr3w5d"></a>
                    <div align="center" class="MsoNormal" style="line-height: 22.5px;">
                        <div align="center" class="MsoNormal" style="line-height: 150%;"><a name="_gm5sejt4p02f"></a>
                            <div align="center" class="MsoNormal" data-custom-class="title"
                                style="text-align: left; line-height: 1.5;"><strong><span
                                        style="line-height: 22.5px; font-size: 26px;">
                                        <bdt class="block-component"></bdt>
                                        <bdt class="question">TERMS AND CONDITIONS</bdt>
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></strong></div>
                            <div align="center" class="MsoNormal" style="line-height: 22.5px; text-align: left;"><a
                                    name="_7m5b3xg56u7y"></a></div>
                            <div align="center" class="MsoNormal" data-custom-class="subtitle"
                                style="text-align: left; line-height: 22.5px;"><br></div>
                            <div align="center" class="MsoNormal" data-custom-class="subtitle"
                                style="text-align: left; line-height: 1.5;"><span
                                    style="color: rgb(89, 89, 89); font-size: 14.6667px; text-align: justify;"><strong>Last
                                        updated <bdt class="block-container question question-in-editor"
                                            data-id="e2088df5-25ea-aec9-83d4-6284f5a7e043" data-type="question">September
                                            11, 2022</bdt></strong></span></div>
                        </div>
                    </div>
                    <div align="center" class="MsoNormal" style="line-height: 17.25px; text-align: left;"><br></div>
                    <div align="center" class="MsoNormal" style="line-height: 17.25px; text-align: left;"><br></div>
                    <div align="center" class="MsoNormal" style="line-height: 17.25px; text-align: left;"><br></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span
                                            data-custom-class="heading_1">TABLE OF
                                            CONTENTS</span></strong></span></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><br></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#agreement"><span >1.
                                    AGREEMENT TO TERMS</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#ip"><span >2. INTELLECTUAL
                                    PROPERTY RIGHTS</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#userreps">3. USER
                                    REPRESENTATIONS</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;">
                    <a href="#prohibited" data-custom-class="link"><span>
                    4. PROHIBITED ACTIVITIES</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#ugc"><span >5. USER GENERATED
                                    CONTRIBUTIONS</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#license">6. CONTRIBUTION
                                    LICENSE</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#reviews"><span >
                                    <bdt class="block-container if" data-type="if"
                                        id="a378120a-96b1-6fa3-279f-63d5b96341d3">
                                        <bdt data-type="conditional-block">
                                            <bdt class="block-component" data-record-question-key="review_option"
                                                data-type="statement"><span style="font-size: 15px;"></span></bdt>
                                </span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#mobile"><span >
                                    <bdt class="block-container if" data-type="if"
                                        id="c954892f-02b9-c743-d1e8-faf0d59a4b70">
                                        <bdt data-type="conditional-block">
                                            <bdt class="block-component" data-record-question-key="mobile_app_option"
                                                data-type="statement"><span style="font-size: 15px;"></span></bdt>
                                </span></a></span></div>
                    <div align="center" style="text-align: left;"><span style="font-size: 15px;">
                            <bdt class="block-component">
                        </span></bdt></span></a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#submissions">7.
                                    SUBMISSIONS</a></span></span></div>
                    <div align="center" style="text-align: left;"><span style="font-size: 15px;">
                            <bdt class="block-component"></bdt><a data-custom-class="link" href="#thirdparty"><span
                                    >8. THIRD-PARTY WEBSITE AND CONTENT</span></a><a
                                data-custom-class="link" href="#agreement"><span >
                                    <bdt class="statement-end-if-in-editor" data-type="close"><span
                                            style="font-size: 15px;"></span></bdt>
                                </span></a>
                        </span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#advertisers"><span >
                                    <bdt class="block-container if" data-type="if"
                                        id="14038561-dad7-be9d-370f-f8aa487b2570">
                                        <bdt data-type="conditional-block">
                                            <bdt class="block-component" data-record-question-key="advertiser_option"
                                                data-type="statement"><span style="font-size: 15px;"></span></bdt>
                                </span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#sitemanage">9. SITE
                                    MANAGEMENT</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#privacypolicy1"><span >
                                    <bdt class="block-container if" data-type="if"
                                        id="bdd90fa9-e664-7d0b-c352-2b8e77dd3bb4">
                                        <bdt data-type="conditional-block">
                                            <bdt class="block-component" data-record-question-key="privacy_policy_option"
                                                data-type="statement"><span style="font-size: 15px;">
                                                    <bdt class="block-container if" data-type="if"
                                                        id="87a7471d-cf82-1032-fdf8-601d37d7b017">
                                                        <bdt data-type="conditional-block">
                                                            <bdt class="block-component"
                                                                data-record-question-key="privacy_policy_followup"
                                                                data-type="statement" style="font-size: 14.6667px;"><span
                                                                    style="font-size: 15px;"></span></bdt>
                                                        </bdt>
                                                    </bdt>
                                                </span></bdt>
                                </span></a><a data-custom-class="link" href="#privacypolicy2"><span
                                    >10. PRIVACY POLICY</span></a>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#terms"><span >11.
                                    TERM AND TERMINATION</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#modifications"><span >12.
                                    MODIFICATIONS AND INTERRUPTIONS</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#law"><span >13. GOVERNING
                                    LAW</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#disputes"><span >14. DISPUTE
                                    RESOLUTION</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#corrections">15.
                                    CORRECTIONS</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#disclaimer"><span >16.
                                    DISCLAIMER</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#liability"><span >17.
                                    LIMITATIONS OF LIABILITY</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#indemnification">18.
                                    INDEMNIFICATION</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#userdata"><span >19. USER
                                    DATA</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#electronic"><span >20.
                                    ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span></a></span></div>
                    <div class="MsoNormal" style="line-height: 1.5; text-align: left;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">
                            <bdt class="block-component">
                        </span></bdt></span></a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><a
                                data-custom-class="link" href="#misc"><span >21.
                                    MISCELLANEOUS</span></a></span></div>
                    <div style="line-height: 1.5; text-align: left;"><span style="font-size: 15px;"><span
                                ><a data-custom-class="link" href="#contact">22. CONTACT
                                    US</a></span></span></div>
                    <div style="line-height: 1.5; text-align: left;"><br></div>
                    <div style="line-height: 1.5; text-align: left;"><br></div>
                </div>
                <div class="MsoNormal" data-custom-class="heading_1" id="agreement" style="line-height: 115%;"><a
                        name="_a7mwfgcrtsqn"></a><strong><span
                            style="line-height: 115%; font-size: 19px;">1. AGREEMENT TO
                            TERMS</span></strong></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">These Terms of Use constitute a legally binding agreement made between you, whether personally or
                        on behalf of an entity (“you”) and <bdt class="block-container question question-in-editor"
                            data-id="4ab94aa9-19d1-61e0-711e-42c7d186232b" data-type="question">Swift Recharge inc</bdt>
                        <bdt class="block-component"></bdt>, doing business as <bdt class="question">Swift Recharge</bdt>
                        <bdt class="statement-end-if-in-editor"></bdt> ("<bdt class="block-component"></bdt>
                        <bdt class="question"><strong>Swift Recharge</strong></bdt>
                        <bdt class="else-block"></bdt>," “<strong>we</strong>," “<strong>us</strong>," or
                        “<strong>our</strong>”), concerning your access to and use of the <bdt
                            class="block-container question question-in-editor"
                            data-id="92c3b320-1d8b-c74c-db68-d12810736807" data-type="question"><a
                                href="https://www.swiftrecharge.ng" target="_blank"
                                data-custom-class="link">https://www.swiftrecharge.ng</a></bdt> website as well as any other
                        media form, media channel, mobile website or mobile application related, linked, or otherwise
                        connected thereto (collectively, the “Site”).<span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                                <bdt class="question">
                                    <bdt class="block-component"></bdt>
                                </bdt><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                                    <bdt class="block-component"></bdt><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"> <span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">We are registered in<bdt class="block-component"></bdt><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                                                    <bdt class="block-component"></bdt> <span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                                                                <bdt class="question">Nigeria</bdt>
                                                                <bdt class="statement-end-if-in-editor"></bdt>
                                                            </span>
                                                            <bdt class="statement-end-if-in-editor"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"> and have our registered office at <bdt class="question">2, Ugochukwu duru ,Igboefon</bdt>
                                                                        <bdt class="block-component"></bdt>
                                                                    </span></span>, <bdt class="question">Lekki</bdt>
                                                        </span></span><span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><span
                                                                style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"><span
                                                                        >
                                                                        <bdt class="block-component"></bdt>, <bdt
                                                                            class="question">Lagos</bdt>
                                                                        <bdt class="statement-end-if-in-editor"></bdt>
                                                                        <bdt class="block-component"></bdt>
                                                                        <bdt class="question">101233</bdt>
                                                                        <bdt class="statement-end-if-in-editor"></bdt>
                                                                    </span></span></span></span><span
                                                            data-custom-class="body_text"><span
                                                                style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"><span
                                                                        >
                                                                        <bdt class="statement-end-if-in-editor">.</bdt>
                                                                    </span></span></span></span></span><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                                                        <bdt class="question">
                                                            <bdt class="statement-end-if-in-editor"></bdt>
                                                        </bdt>
                                                    </span></bdt>
                                                </span>
                                                <bdt class="statement-end-if-in-editor"></bdt>
                                            </span>
                                            <bdt class="block-component"></bdt>
                                        </span></span>
                                </span>
                            </span> You agree that by accessing the Site, you have read, understood, and agreed to be bound
                            by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
                            EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</span></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">Supplemental terms and conditions or documents that may be posted on the Site from time to time
                        are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion,
                        to make changes or modifications to these Terms of Use <bdt class="block-component"></bdt>at any
                        time and for any reason<bdt class="statement-end-if-in-editor"></bdt>. We will alert you about any
                        changes by updating the “Last updated” date of these Terms of Use, and you waive any right to
                        receive specific notice of each such change. Please ensure that you check the applicable Terms every
                        time you use our Site so that you understand which Terms apply. You will be subject to, and will be
                        deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by
                        your continued use of the Site after the date such revised Terms of Use are posted.</span></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">The information provided on the Site is not intended for distribution to or use by any person or
                        entity in any jurisdiction or country where such distribution or use would be contrary to law or
                        regulation or which would subject us to any registration requirement within such jurisdiction or
                        country. Accordingly, those persons who choose to access the Site from other locations do so on
                        their own initiative and are solely responsible for compliance with local laws, if and to the extent
                        local laws are applicable.</span></div>
                <div class="MsoNormal" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">
                            <bdt class="block-component"></bdt>
                        </span></bdt></span></span></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;">
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="user_o18_option" data-type="statement"><span
                                style="font-size: 15px;"></bdt>
                        <bdt class="block-container if" data-type="if" id="a2595956-7028-dbe5-123e-d3d3a93ed076">
                            <bdt data-type="conditional-block">
                                <bdt data-type="body"><span style="color: rgb(89, 89, 89); font-size: 14.6667px;">All users
                                        who are minors in the jurisdiction in which they reside (generally under the age of
                                        18) must have the permission of, and be directly supervised by, their parent or
                                        guardian to use the Site. If you are a minor, you must have your parent or guardian
                                        read and agree to these Terms of Use prior to you using the Site.</span></bdt>
                            </bdt>
                        </bdt></span>
                    </bdt>
                    </bdt>
                    </bdt>
                    </bdt></span>
                    <bdt class="statement-end-if-in-editor" data-type="close"><span style="font-size: 15px;"></span></bdt>
                </div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1.5;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" data-custom-class="heading_1" id="ip" style="line-height: 1.5;"><a
                        name="_4rd71iod99ud"></a><strong><span
                            style="line-height: 115%; font-size: 19px;"><strong><span
                                    style="line-height: 115%; font-size: 19px;">2.
                                </span></strong>INTELLECTUAL PROPERTY RIGHTS</span></strong></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">Unless otherwise indicated, the Site is our proprietary
                        property and all source code, databases, functionality, software, website
                        designs, audio, video, text, photographs, and graphics on the Site
                        (collectively, the “Content”) and the trademarks, service marks, and logos
                        contained therein (the “Marks”) are owned or controlled by us or licensed to
                        us, and are protected by copyright and trademark laws and various other
                        intellectual property rights and unfair competition laws of the United States, international
                        copyright laws, and international conventions. The Content and the Marks are provided on the
                        Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms
                        of Use, no part of the Site and no Content or Marks may be copied, reproduced,
                        aggregated, republished, uploaded, posted, publicly displayed, encoded,
                        translated, transmitted, distributed, sold, licensed, or otherwise exploited
                        for any commercial purpose whatsoever, without our express prior written
                        permission.</span></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      color:#595959;mso-themecolor:text1;
      mso-themetint:166;">Provided that you are eligible to use the Site, you are
                        granted a limited license to access and use the Site and to download or print a
                        copy of any portion of the Content to which you have properly gained access
                        solely for your personal, non-commercial use. We reserve all rights not
                        expressly granted to you in and to the Site, the Content and the Marks.</span></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1.5;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" data-custom-class="heading_1" id="userreps" style="line-height: 1.5;"><a
                        name="_vhkegautf00d"></a><strong><span
                            style="line-height: 115%; font-size: 19px;"><strong><span
                                    style="line-height: 115%; font-size: 19px;"><strong><span
                                            style="line-height: 115%; font-size: 19px;">3.</span></strong></span>
                            </strong>USER REPRESENTATIONS</span></strong></div>
                <div class="MsoNormal" style="line-height: 1;"><br></div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;
      line-height:115%;">
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">By using the Site, you
                            represent and warrant that:</span>
                        <bdt class="block-container if" data-type="if" id="d2d82ca8-275f-3f86-8149-8a5ef8054af6">
                            <bdt data-type="conditional-block">
                                <bdt class="block-component" data-record-question-key="user_account_option"
                                    data-type="statement"></bdt>
                            </bdt><span style="color: rgb(89, 89, 89); font-size: 11pt;">(</span><span
                                style="color: rgb(89, 89, 89); font-size: 14.6667px;">1</span><span
                                style="color: rgb(89, 89, 89); font-size: 11pt;">) you have the legal capacity and you agree
                                to comply with these Terms of Use;</span>
                            <bdt class="block-container if" data-type="if" id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13">
                                <bdt data-type="conditional-block">
                                    <bdt class="block-component" data-record-question-key="user_u13_option"
                                        data-type="statement"></bdt>
                                </bdt></span>
                            </bdt>
                        </bdt>
                        </bdt><span style="color: rgb(89, 89, 89); font-size: 11pt;"> (</span><span
                            style="color: rgb(89, 89, 89); font-size: 14.6667px;">2</span><span
                            style="color: rgb(89, 89, 89); font-size: 11pt;">) you are not a minor in the jurisdiction in
                            which you reside<bdt class="block-container if" data-type="if"
                                id="76948fab-ec9e-266a-bb91-948929c050c9">
                                <bdt data-type="conditional-block">
                                    <bdt class="block-component" data-record-question-key="user_o18_option"
                                        data-type="statement"></bdt>
                                    <bdt data-type="body">, or if a minor, you have received parental permission to use the
                                        Site</bdt>
                                </bdt>
                                <bdt class="statement-end-if-in-editor" data-type="close"></bdt>
                            </bdt>; (</span><span style="color: rgb(89, 89, 89); font-size: 14.6667px;">3</span><span
                            style="color: rgb(89, 89, 89); font-size: 11pt;">) you will not access the Site through
                            automated or non-human means, whether through a bot, script, or otherwise; (</span><span
                            style="color: rgb(89, 89, 89); font-size: 14.6667px;">4</span><span
                            style="color: rgb(89, 89, 89); font-size: 11pt;">) you will not use the Site for any illegal or
                            unauthorized purpose; and (</span><span
                            style="color: rgb(89, 89, 89); font-size: 14.6667px;">5</span><span
                            style="color: rgb(89, 89, 89); font-size: 11pt;">) your use of the Site will not violate any
                            applicable law or regulation.</span><span
                            style="color: rgb(89, 89, 89); font-size: 14.6667px;"></span>
                    </div>
                </div>
                <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
                <div class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph;
      line-height:115%;">
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">If you provide any
                            information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend
                            or terminate your account and refuse any and all current or future use of the Site (or any
                            portion thereof).</span></div>
                </div>
            </div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 1.5;"><br></div>
            <div align="center" class="MsoNormal" style="text-align: left; line-height: 150%;">
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" style="line-height: 1;"><a name="_esuoutkhaf53"></a>
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="user_account_option" data-type="statement">
                            <span style="font-size: 15px;"></span></bdt>
                </div>
                <div class="MsoNormal" style="line-height:115%;"><a name="_1voziltdxegg"></a>
                    <div class="MsoNormal" data-custom-class="heading_1" id="prohibited" style="line-height: 17.25px;">
                        <strong><span style="line-height: 24.5333px; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                style="line-height: 115%; font-size: 19px;">4.</span></strong></span>
                                </strong>PROHIBITED ACTIVITIES</span></strong></div>
                </div>
                <div class="MsoNormal" style="line-height: 1;"><br></div>
                <div class="MsoNormal" style="line-height:115%;">
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">You may not access or
                            use the Site for any purpose other than that for which we make the Site available. The Site may
                            not be used in connection with any commercial endeavors except those that are specifically
                            endorsed or approved by us.</span></div>
                </div>
                <div class="MsoNormal" style="line-height: 1;"><br></div>
                <div class="MsoNormal" style="line-height:115%;">
                    <div class="MsoNormal" style="text-align: justify; line-height: 17.25px;">
                        <div style="line-height: 35.25px;text-align: left;font-size: 15px;" ">
                            <div class="MsoNormal" data-custom-class="body_text"
                                style="line-height: 1.5; text-align: left;"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">As a user of
                                    the Site, you agree not to:</span></div>
                        </div>
                        <ul>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                        style="">Systematically
                                        retrieve data or other content from the Site to create or compile, directly or
                                        indirectly, a collection, compilation, database, or directory without written
                                        permission from us.</span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Trick,
                                                    defraud, or mislead us and other users, especially in any attempt to
                                                    learn sensitive account information such as user
                                                    passwords.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Circumvent,
                                                    disable, or otherwise interfere with security-related features of the
                                                    Site, including features that prevent or restrict the use or copying of
                                                    any Content or enforce limitations on the use of the Site and/or the
                                                    Content contained therein.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Disparage,
                                                    tarnish, or otherwise harm, in our opinion, us and/or the
                                                    Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Use
                                                    any information obtained from the Site in order to harass, abuse, or
                                                    harm another person.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Make
                                                    improper use of our support services or submit false reports of abuse or
                                                    misconduct.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Use
                                                    the Site in a manner inconsistent with any applicable laws or
                                                    regulations.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Engage
                                                    in unauthorized framing of or linking to the
                                                    Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Upload
                                                    or transmit (or attempt to upload or to transmit) viruses, Trojan
                                                    horses, or other material, including excessive use of capital letters
                                                    and spamming (continuous posting of repetitive text), that interferes
                                                    with any party’s uninterrupted use and enjoyment of the Site or
                                                    modifies, impairs, disrupts, alters, or interferes with the use,
                                                    features, functions, operation, or maintenance of the
                                                    Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Engage
                                                    in any automated use of the system, such as using scripts to send
                                                    comments or messages, or using any data mining, robots, or similar data
                                                    gathering and extraction tools.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Delete
                                                    the copyright or other proprietary rights notice from any
                                                    Content.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Attempt
                                                    to impersonate another user or person or use the username of another
                                                    user.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Upload
                                                    or transmit (or attempt to upload or to transmit) any material that acts
                                                    as a passive or active information collection or transmission mechanism,
                                                    including without limitation, clear graphics interchange formats
                                                    (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices
                                                    (sometimes referred to as “spyware” or “passive collection mechanisms”
                                                    or “pcms”).</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Interfere
                                                    with, disrupt, or create an undue burden on the Site or the networks or
                                                    services connected to the Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Harass,
                                                    annoy, intimidate, or threaten any of our employees or agents engaged in
                                                    providing any portion of the Site to
                                                    you.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Attempt
                                                    to bypass any measures of the Site designed to prevent or restrict
                                                    access to the Site, or any portion of the
                                                    Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Copy
                                                    or adapt the Site’s software, including but not limited to Flash, PHP,
                                                    HTML, JavaScript, or other code.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Except
                                                    as permitted by applicable law, decipher, decompile, disassemble, or
                                                    reverse engineer any of the software comprising or in any way making up
                                                    a part of the Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Except
                                                    as may be the result of standard search engine or Internet browser
                                                    usage, use, launch, develop, or distribute any automated system,
                                                    including without limitation, any spider, robot, cheat utility, scraper,
                                                    or offline reader that accesses the Site, or using or launching any
                                                    unauthorized script or other
                                                    software.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Use
                                                    a buying agent or purchasing agent to make purchases on the
                                                    Site.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Make
                                                    any unauthorized use of the Site, including collecting usernames and/or
                                                    email addresses of users by electronic or other means for the purpose of
                                                    sending unsolicited email, or creating user accounts by automated means
                                                    or under false pretenses.</span></span></span></span></span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Use
                                                    the Site as part of any effort to compete with us or otherwise use the
                                                    Site and/or the Content for any revenue-generating endeavor or
                                                    commercial enterprise.</span></span></span></span>
                                    <bdt class="block-component"></bdt>
                                </span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Use
                                                    the Site to advertise or offer to sell goods and
                                                    services.</span></span></span></span>
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                    <bdt class="block-component"></bdt>
                                </span></li>
                            <li class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;">
                                <span style="font-size: 15px;"><span
                                        style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                            style=""><span
                                                style="line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                    style="">Sell
                                                    or otherwise transfer your profile.</span></span></span></span>
                                    <bdt class="statement-end-if-in-editor"></bdt>
                                    <bdt class="forloop-component"></bdt>
                                </span></li>
                        </ul>
                        <div class="MsoNormal" style="text-align: left; line-height: 1.5;"><a name="_zbbv9tgty199"></a>
                        </div>
                    </div>
                    <div class="MsoNormal" style="text-align: justify; line-height: 1.5;"><br></div>
                    <div class="MsoNormal" style="text-align: justify; line-height: 1.5;"><br></div>
                    <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <div class="MsoNormal" data-custom-class="heading_1" id="ugc"
                                    style="line-height: 35.25px;text-align: left;font-size: 15px;" > <strong><span
                                            style="line-height: 24.5333px; font-size: 19px;"><strong><span
                                                    style="line-height: 115%; font-size: 19px;"><strong><span
                                                            style="line-height: 115%; font-size: 19px;">5.</span></strong></span>
                                            </strong>USER GENERATED CONTRIBUTIONS</span></strong></div>
                            </bdt>
                        </bdt>
                    </div>
                    <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
                    <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <div class="MsoNormal" data-custom-class="body_text"
                                    style="line-height: 1.5; text-align: left;"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                        <bdt class="block-component"></bdt>The Site does not offer users to submit or post
                                        content. We may provide you with the opportunity to create, submit, post, display,
                                        transmit, perform, publish, distribute, or broadcast content and materials to us or
                                        on the Site, including but not limited to text, writings, video, audio, photographs,
                                        graphics, comments, suggestions, or personal information or other material
                                        (collectively, "Contributions"). Contributions may be viewable by other users of the
                                        Site and through third-party websites. As such, any Contributions you transmit may
                                        be treated in accordance with the Site Privacy Policy. When you create or make
                                        available any Contributions, you thereby represent and warrant that:<span
                                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                            <bdt class="statement-end-if-in-editor"></bdt>
                                        </span>
                                    </span></div>
                            </bdt>
                        </bdt>
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <ul>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">The creation, <span
                                                style="font-size: 14px; color: rgb(89, 89, 89);">distribution, transmission,
                                                public display, or performance, and the accessing, downloading, or copying
                                                of your Contributions do not and will not infringe the proprietary rights,
                                                including but not limited to the copyright, patent, trademark, trade secret,
                                                or moral rights of any third party.</span></span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);"><span
                                                style="font-size: 14px; color: rgb(89, 89, 89);">You are the creator and
                                                owner of or have the necessary licenses, rights, consents, releases, and
                                                permissions to use and to authorize us, the Site, and other users of the
                                                Site to use your Contributions in any manner contemplated by the Site and
                                                these Terms of Use.</span></span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">You have the written consent,
                                            release, and/or permission of each and every identifiable individual person in
                                            your Contributions to use the name or likeness of each and every such
                                            identifiable individual person to enable inclusion and use of your Contributions
                                            in any manner contemplated by the Site and these Terms of Use.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions are not
                                            false, inaccurate, or misleading.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions are not
                                            unsolicited or unauthorized advertising, promotional materials, pyramid schemes,
                                            chain letters, spam, mass mailings, or other forms of solicitation.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions are not
                                            obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or
                                            otherwise objectionable (as determined by us).</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            ridicule, mock, disparage, intimidate, or abuse anyone.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions are not used
                                            to harass or threaten (in the legal sense of those terms) any other person and
                                            to promote violence against a specific person or class of people.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            violate any applicable law, regulation, or rule.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            violate the privacy or publicity rights of any third party.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            violate any applicable law concerning child pornography, or otherwise intended
                                            to protect the health or well-being of minors.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            include any offensive comments that are connected to race, national origin,
                                            gender, sexual preference, or physical handicap.</span></li>
                                    <li class="MsoNormal" data-custom-class="body_text"
                                        style="line-height: 1.5; text-align: left;"><span
                                            style="font-size: 14px; color: rgb(89, 89, 89);">Your Contributions do not
                                            otherwise violate, or link to material that violates, any provision of these
                                            Terms of Use, or any applicable law or regulation.</span></li>
                                </ul>
                            </bdt>
                        </bdt>
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <div class="MsoNormal" data-custom-class="body_text"
                                    style="line-height: 1.5; text-align: left;"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">Any use of
                                        the Site in violation of the foregoing violates these Terms of Use and may result
                                        in, among other things, termination or suspension of your rights to use the
                                        Site.</span></div>
                            </bdt>
                        </bdt>
                    </div>
                </div>
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" style="line-height:115%;">
                    <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <div class="MsoNormal" data-custom-class="heading_1" id="license"
                                    style="line-height: 1.5; text-align: left;"><strong><span
                                            style="line-height: 24.5333px; font-size: 19px;"><strong><span
                                                    style="line-height: 115%; font-size: 19px;"><strong><span
                                                            style="line-height: 115%; font-size: 19px;">6.</span></strong></span>
                                            </strong>CONTRIBUTION LICENSE</span></strong></div>
                            </bdt>
                        </bdt>
                        <bdt data-type="conditional-block">
                            <bdt data-type="body">
                                <div style="line-height: 35.25px;text-align: left;font-size: 15px;"  text-align: left;"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                        <bdt class="block-component"></bdt>
                                    </span></div>
                                <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
                    </div>
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">You agree that we may
                            access, store, process, and use any information and personal data that you provide following the
                            terms of the Privacy Policy and your choices (including settings).</span></div>
                    <div class="MsoNormal" style="line-height: 1;"><br></div>
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">By submitting
                            suggestions or other feedback regarding the Site, you agree that we can use and share such
                            feedback for any purpose without compensation to you.</span></div>
                    <div class="MsoNormal" style="line-height: 1;"><br></div>
                    <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5; text-align: left;"><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">We do not assert any
                            ownership over your Contributions. You retain full ownership of all of your Contributions and
                            any intellectual property rights or other proprietary rights associated with your Contributions.
                            We are not liable for any statements or representations in your Contributions provided by you in
                            any area on the Site. You are solely responsible for your Contributions to the Site and you
                            expressly agree to exonerate us from any and all responsibility and to refrain from any legal
                            action against us regarding your Contributions.</span></div>
                    <div class="MsoNormal" style="line-height: 1.5;">
                        <bdt class="block-container if" data-type="if">
                            <bdt class="statement-end-if-in-editor" data-type="close"><span style="font-size: 15px;"></span>
                            </bdt>
                        </bdt>
                    </div>
                    <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                    <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                    <div class="MsoNormal" style="line-height: 1;">
                        <bdt class="block-container if" data-type="if">
                            <bdt data-type="conditional-block">
                                <bdt class="block-component" data-record-question-key="review_option" data-type="statement">
                                    <span style="font-size: 15px;"></span></bdt>
                            </bdt>
                    </div>
                </div>
                <div class="MsoNormal" style="line-height: 115%;"><span style="font-size: 15px;"><a
                            name="_6nl7u6ag6use"></a></span></div>
                <bdt class="block-container if" data-type="if" id="c954892f-02b9-c743-d1e8-faf0d59a4b70">
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="mobile_app_option" data-type="statement">
                            <span style="font-size: 15px;"></span></bdt>
                    </bdt>
            </div>
            <div align="center"><span style="font-size: 15px;">
                    <bdt class="block-component"></bdt>
                </span></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="submissions" style="line-height: 115%;"><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">7.</span></strong></span>
                        </strong>SUBMISSIONS</span></strong></div>
            <div style="line-height: 1;"><br></div>
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">You acknowledge and agree that any questions,
                        comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions")
                        provided by you to us are non-confidential and shall become our sole property. We shall own
                        exclusive rights, including all intellectual property rights, and shall be entitled to the
                        unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or
                        otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any
                        such Submissions, and you hereby warrant that any such Submissions are original with you or that you
                        have the right to submit such Submissions. You agree there shall be no recourse against us for any
                        alleged or actual infringement or misappropriation of any proprietary right in your
                        Submissions.</span></span></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><br></div>
            <div align="center"><span style="font-size: 15px;">
                    <bdt class="block-component"></bdt>
                </span></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="thirdparty" style="line-height: 115%;"><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">8.</span></strong></span>
                        </strong>THIRD-PARTY WEBSITE AND CONTENT</span></strong></div>
            <div style="line-height: 1;"><br></div>
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">The Site may contain (or you may be sent via the Site)
                    links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics,
                    pictures, designs, music, sound, video, information, applications, software, and other content or items
                    belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and
                    Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or
                    completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or
                    any Third-Party Content posted on, available through, or installed from the Site, including the content,
                    accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in
                    the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or
                    installation of any Third-Party Websites or any Third-Party Content does not imply approval or
                    endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use
                    or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of
                    Use no longer govern. You should review the applicable terms and policies, including privacy and data
                    gathering practices, of any website to which you navigate from the Site or relating to any applications
                    you use or install from the Site. Any purchases you make through Third-Party Websites will be through
                    other websites and from other companies, and we take no responsibility whatsoever in relation to such
                    purchases which are exclusively between you and the applicable third party. You agree and acknowledge
                    that we do not endorse the products or services offered on Third-Party Websites and you shall hold us
                    harmless from any harm caused by your purchase of such products or services. Additionally, you shall
                    hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any
                    way from any Third-Party Content or any contact with Third-Party Websites.</span></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div style="line-height: 1.5;"><br></div>
            <div align="center"><span style="font-size: 15px;">
                    <bdt class="statement-end-if-in-editor"></bdt>
                </span></div>
            <div align="center" style="text-align: left; line-height: 1;">
                <div class="MsoNormal" style="line-height: 115%;"><span style="font-size: 15px;"><a
                            name="_29ce8o9pbtmi"></a></span></div>
                <bdt class="block-container if" data-type="if" id="14038561-dad7-be9d-370f-f8aa487b2570">
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="advertiser_option" data-type="statement">
                            <span style="font-size: 15px;"></span></bdt>
                    </bdt>
                    <div class="MsoNormal" data-custom-class="heading_1" id="sitemanage" style="line-height: 115%;"><a
                            name="_wj13r09u8u3u"></a><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                style="line-height: 115%; font-size: 19px;">9.</span></strong></span>
                                </strong>SITE MANAGEMENT</span></strong></div>
            </div>
            <div align="center" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" style="text-align: left; line-height: 1.5;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">We reserve the
                        right, but not the obligation, to: (1) monitor the Site for violations of
                        these Terms of Use; (2) take appropriate legal action against anyone who, in
                        our sole discretion, violates the law or these Terms of Use, including without
                        limitation, reporting such user to law enforcement authorities; (3) in our sole
                        discretion and without limitation, refuse, restrict access to, limit the
                        availability of, or disable (to the extent technologically feasible) any of
                        your Contributions or any portion thereof; (4) in our sole discretion and
                        without limitation, notice, or liability, to remove from the Site or otherwise
                        disable all files and content that are excessive in size or are in any way
                        burdensome to our systems; and (5) otherwise manage the Site in a manner
                        designed to protect our rights and property and to facilitate the proper
                        functioning of the Site.</span></div>
            </div>
            <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
            <div align="center" style="text-align: left; line-height: 1.5;">
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" style="line-height: 1.5;"><a name="_jugvcvcw0oj9"></a></div>
                <bdt class="block-container if" data-type="if" id="bdd90fa9-e664-7d0b-c352-2b8e77dd3bb4">
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="privacy_policy_option" data-type="statement">
                            <span style="font-size: 15px;"></span></bdt>
                    </bdt>
                    <div style="text-align: justify; line-height: 1.5;">
                        <bdt class="block-container if" data-type="if" id="87a7471d-cf82-1032-fdf8-601d37d7b017">
                            <bdt data-type="conditional-block">
                                <bdt class="block-component" data-record-question-key="privacy_policy_followup"
                                    data-type="statement" style="font-size: 14.6667px;"><span
                                        style="font-size: 15px;"></span></bdt>
                                <bdt data-type="body">
                                    <div class="MsoNormal" data-custom-class="heading_1" id="privacypolicy2"
                                        style="text-align: left; line-height: 1.5;"><strong><span
                                                style="line-height: 24.5333px; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 19px;"><strong><span
                                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                                style="line-height: 115%; font-size: 19px;">10.
                                                            </span></strong></span></strong>PRIVACY POLICY</span></strong>
                                    </div>
                                    <div class="MsoNormal" style="font-size: 14.6667px; text-align: left; line-height: 1;">
                                        <br></div>
                                    <div class="MsoNormal" data-custom-class="body_text"
                                        style="font-size: 14.6667px; text-align: left; line-height: 1.5;"><span
                                            style="font-size: 15px; line-height: 16.8667px; color: rgb(89, 89, 89);">We care
                                            about data privacy and security. </span><span style="font-size: 15px;"><span
                                                >By using the Site, you agree to be bound by
                                                our Privacy Policy posted on the Site, which is incorporated into these
                                                Terms of Use. Please be advised the Site is hosted in <span
                                                    style="color: rgb(89, 89, 89); font-size: 11pt;"><span
                                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                        <bdt class="block-component"></bdt>the <bdt class="question">United
                                                            States</bdt>
                                                        <bdt class="block-component"></bdt>
                                                    </span></span>. If you access the Site from any other region of the
                                                world with laws or other requirements governing personal data collection,
                                                use, or disclosure that differ from applicable laws in <span
                                                    style="color: rgb(89, 89, 89); font-size: 11pt;"><span
                                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                        <bdt class="block-component"></bdt>the <bdt class="question">United
                                                            States</bdt>
                                                        <bdt class="block-component"></bdt>
                                                    </span></span>, then through your continued use of the Site, you are
                                                transferring your data to <span
                                                    style="color: rgb(89, 89, 89); font-size: 11pt;"><span
                                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                        <bdt class="block-component"></bdt>the <bdt class="question">United
                                                            States</bdt>
                                                        <bdt class="block-component"></bdt>
                                                    </span></span>, and you agree to have your data transferred to and
                                                processed in <span style="color: rgb(89, 89, 89); font-size: 11pt;"><span
                                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                        <bdt class="block-component"></bdt>the <bdt class="question">United
                                                            States</bdt>
                                                        <bdt class="block-component"></bdt>
                                                    </span></span>. <bdt class="block-component"></span>
                                </bdt>
                            </bdt>
                        </bdt>
                </bdt></span></bdt>
            </div>
            </bdt>
            </bdt>
            </bdt>
        </div>
        <div style="text-align: justify; line-height: 1.5;"><br></div>
        <div style="text-align: justify; line-height: 1.5;"><br></div>
        <div style="line-height: 1.5;">
            <bdt class="block-container if" data-type="if">
                <bdt class="statement-end-if-in-editor" data-type="close" style="font-size: 14.6667px;"><span
                        style="font-size: 15px;"></span></bdt>
            </bdt>
        </div>
        <div class="MsoNormal" style="line-height: 115%;"><span style="font-size: 15px;"><a name="_n081pott8yce"></a></span>
        </div>
        <bdt class="block-component">
            <bdt class="block-component"></span></bdt>
        </bdt></span></bdt>
        </bdt>
        <div class="MsoNormal" style="line-height: 1;"><span style="font-size: 15px;"><a name="_sg28ikxq3swh"></a></span>
            <bdt class="block-component">
                <bdt class="block-component"></bdt>
                <bdt class="block-component"></bdt>
                <bdt class="statement-end-if-in-editor"></bdt>
        </div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="heading_1" id="terms" style="line-height: 115%;"><a
                    name="_k3mndam4w6w1"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">11.</span></strong></span>
                        </strong>TERM AND TERMINATION</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                    style="font-size: 15px; line-height: 115%; color: rgb(89, 89, 89);">These Terms of
                    Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION
                    OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
                    DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
                    REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                    COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
                    USE OR PARTICIPATION IN THE SITE OR DELETE <bdt class="block-container if" data-type="if"
                        id="a6e121c2-36b4-5066-bf9f-a0a33512e768">
                        <bdt data-type="conditional-block">
                            <bdt class="block-component" data-record-question-key="user_account_option"
                                data-type="statement"></bdt>
                        </bdt>ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
                        WITHOUT WARNING, IN OUR SOLE DISCRETION.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">If we terminate
                    or suspend your account for any reason, you are prohibited from registering and
                    creating a new account under your name, a fake or borrowed name, or the name of
                    any third party, even if you may be acting on behalf of the third party. In
                    addition to terminating or suspending your account, we reserve the right to
                    take appropriate legal action, including without limitation pursuing civil,
                    criminal, and injunctive redress.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="modifications" style="line-height: 1.5;"><a
                    name="_e2dep1hfgltt"></a><strong><span style="line-height: 115%; "><span
                            style="font-size: 19px;"><strong><span
                                    style="line-height: 115%; font-size: 19px;"><strong><span
                                            style="line-height: 115%; font-size: 19px;">12.</span></strong></span>
                            </strong>MODIFICATIONS AND INTERRUPTIONS</span></span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">We reserve the right to change, modify, or remove the
                    contents of the Site at any time or for any reason at our sole discretion without notice. However, we
                    have no obligation to update any information on our Site. We also reserve the right to modify or
                    discontinue all or part of the Site without notice at any time. We will not be liable to you or any
                    third party for any modification, price change, suspension, or discontinuance of the Site.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">We cannot guarantee
                    the Site will be available at all times. We may experience hardware, software,
                    or other problems or need to perform maintenance related to the Site, resulting
                    in interruptions, delays, or errors. We
                    reserve the right to change, revise, update, suspend, discontinue, or otherwise
                    modify the Site at any time or for any reason without notice to you. You agree that we have no liability
                    whatsoever for any loss, damage, or inconvenience caused by your inability to
                    access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use
                    will be
                    construed to obligate us to maintain and support the Site or to supply any
                    corrections, updates, or releases in connection therewith.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="law" style="line-height: 1.5;"><a
                    name="_p6vbf8atcwhs"></a><strong><span style="line-height: 115%; "><span
                            style="font-size: 19px;"><strong><span
                                    style="line-height: 115%; font-size: 19px;"><strong><span
                                            style="line-height: 115%; font-size: 19px;">13.</span></strong></span>
                            </strong>GOVERNING LAW</span> </span></strong></div>
            <div class="MsoNormal" style="line-height: 1;"><br></div>
            <div class="MsoNormal" style="line-height: 115%;">
                <bdt class="block-component"><span style="font-size: 15px;"></bdt></span></span>
            </div>
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">These Terms shall be
                        governed by and defined following the laws of <span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                        <bdt class="block-component"></bdt><span
                                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                <bdt class="question">Nigeria</bdt>
                                               Swift Recharge  inc. and yourself irrevocably consent that the courts of 
                                            </span></span>
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></span></span></span></span></span></span></span><span
                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                        <bdt class="block-component"></bdt><span
                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                <bdt class="question">Nigeria shall have exclusive jurisdiction to resolve any dispute
                                which may arise in connection with these terms.</bdt>
                            </span></span>
                        <bdt class="statement-end-if-in-editor"></bdt>
                    </span></span></span></span></span> </span></span></span></div>
            <div class="MsoNormal" style="line-height: 1.5;"><span
                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                            style="font-size: 15px;">
                            <bdt class="statement-end-if-in-editor"></bdt>
                        </span></span></span></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="disputes" style="line-height: 1.5;"><a
                    name="_v5i5tjw62cyw"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                style="line-height: 115%; font-size: 19px;">14.</span></strong></span></strong></span>
                        </strong>DISPUTE RESOLUTION</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 115%;">
                <bdt class="block-container if" data-type="if" id="4de367b8-a92e-8bf8-bc2e-013cba6337f8">
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="dispute_option" data-type="statement"></bdt>
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="heading_2"
                                style="line-height: 35.25px;text-align: left;font-size: 15px;" > <strong>Informal Negotiations</strong></div>
                                
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="line-height: 1;"><br></div>
            <div class="MsoNormal" style="line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="body_text"
                                style="text-align: left; line-height: 1.5;"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">To expedite
                                    resolution and control the cost of any dispute, controversy, or claim related to these
                                    Terms of Use (each "Dispute" and collectively, the “Disputes”) brought by either you or
                                    us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first
                                    attempt to negotiate any Dispute (except those Disputes expressly provided below)
                                    informally for at least <bdt class="block-container question question-in-editor"
                                        data-id="33108d82-92fb-fbe9-6ef5-01cac7097351" data-type="question">thirty (30)
                                    </bdt> days before initiating arbitration. Such informal negotiations commence upon
                                    written notice from one Party to the other Party.</span></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="line-height: 1;"><br></div>
            <div class="MsoNormal" style="line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                        
                            <div class="MsoNormal" data-custom-class="heading_2"
                            style="line-height: 35.25px;text-align: left;font-size: 15px;" ><a name="_p2enhfx5sw3j"></a><strong>Binding
                                    Arbitration</strong></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="line-height: 1;"><br></div>
            <div class="MsoNormal" style="line-height: 1;"><span
                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                    <bdt class="block-component"></bdt>
                </span></span></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="body_text"
                                style="text-align: left; line-height: 1.5;"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">Any dispute
                                    arising out of or in connection with this contract, including any question regarding its
                                    existence, validity, or termination, shall be referred to and finally resolved by the
                                    International Commercial Arbitration Court under the European Arbitration Chamber
                                    (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a
                                    result of referring to it, is considered as the part of this clause. The number of
                                    arbitrators shall be <bdt class="question">three (3)</bdt>. The seat, or legal place, of
                                    arbitration shall be <span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                        <bdt class="block-component"></bdt>
                                        <bdt class="question">Ikoyi</bdt>, <bdt class="block-component"></bdt>
                                        <bdt class="question">Nigeria</bdt>
                                        <bdt class="statement-end-if-in-editor"></bdt>
                                    </span></span></span></span></span>
                                <bdt class="else-block"></bdt></span>.<span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"> The
                                        language of the proceedings shall be <bdt class="question">English</bdt>
                                        . The governing law of the contract shall be the substantive law of</span></span>
                                <span style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                        style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                        <bdt class="block-component"></bdt><span
                                            style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);"><span
                                                style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                                                <bdt class="block-component"></bdt>
                                                <bdt class="question">Nigeria</bdt>
                                                <bdt class="statement-end-if-in-editor"></bdt>
                                            </span></span>
                                    </span></span></span></span></span>
                                <bdt class="statement-end-if-in-editor"></bdt></span></span>.</span>
                            </div>
                            <div style="line-height: 35.25px;text-align: left;font-size: 15px;"  text-align: left;"><a
                                    name="_xl7dsk6ndrpp"></a></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;"><span
                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">
                    <bdt class="statement-end-if-in-editor"></bdt>
                </span></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="heading_2"
                            style="line-height: 35.25px;text-align: left;font-size: 15px;" ><a
                                    name="_inlv5c77dhih"></a><strong>Restrictions</strong></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="body_text"
                                style="text-align: left; line-height: 1.5;"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">The Parties
                                    agree that any arbitration shall be limited to the Dispute between the Parties
                                    individually. To the full extent permitted by law, (a) no arbitration shall be joined
                                    with any other proceeding; (b) there is no right or authority for any Dispute to be
                                    arbitrated on a class-action basis or to utilize class action procedures; and (c) there
                                    is no right or authority for any Dispute to be brought in a purported representative
                                    capacity on behalf of the general public or any other persons.</span></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="heading_2"
                            style="line-height: 35.25px;text-align: left;font-size: 15px;" ><a
                                    name="_mdjlt1af25uq"></a><strong>Exceptions to Informal Negotiations and
                                    Arbitration</strong></div>
                        </bdt>
                    </bdt>
                </bdt>
            </div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;"><br></div>
            <div class="MsoNormal" style="text-align: justify; line-height: 1;">
                <bdt class="block-container if" data-type="if">
                    <bdt data-type="conditional-block">
                        <bdt data-type="body">
                            <div class="MsoNormal" data-custom-class="body_text"
                                style="text-align: left; line-height: 1.5;"><span
                                    style="font-size: 11pt; line-height: 16.8667px; color: rgb(89, 89, 89);">The Parties
                                    agree that the following Disputes are not subject to the above provisions concerning
                                    informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or
                                    protect, or concerning the validity of, any of the intellectual property rights of a
                                    Party; (b) any Dispute related to, or arising from, allegations of theft, piracy,
                                    invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If
                                    this provision is found to be illegal or unenforceable, then neither Party will elect to
                                    arbitrate any Dispute falling within that portion of this provision found to be illegal
                                    or unenforceable and such Dispute shall be decided by a court of competent jurisdiction
                                    within the courts listed for jurisdiction above, and the Parties agree to submit to the
                                    personal jurisdiction of that court.</span></div>
                        </bdt>
                    </bdt>
                    <bdt data-type="conditional-block">
                        <bdt class="block-component" data-record-question-key="null" data-type="statement"><span
                                style="font-size: 15px;"></span></bdt>
                    </bdt>
            </div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="corrections" style="line-height: 1.5;"><a
                    name="_mjgzo07ttzx5"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">15.</span></strong></span>
                        </strong>CORRECTIONS</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">There may be
                    information on the Site that contains typographical errors, inaccuracies, or
                    omissions, including descriptions, pricing, availability, and various other
                    information. We reserve the right to
                    correct any errors, inaccuracies, or omissions and to change or update the
                    information on the Site at any time, without prior notice.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="disclaimer" style="line-height: 1.5;"><a
                    name="_gvi74blrahf9"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">16.</span></strong></span>
                        </strong>DISCLAIMER</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">THE SITE IS PROVIDED
                    ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                    AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE
                    FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                    IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT
                    LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
                    THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY
                    WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY
                    FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                    PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
                    YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
                    OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                    INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION
                    TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
                    MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY
                    ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
                    ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                    OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE,
                    OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
                    THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
                    APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
                    PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU
                    AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                    PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
                    SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="liability" style="line-height: 1.5;"><a
                    name="_4pjah3d0455q"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">17.
                                    </span></strong></span></strong>LIMITATIONS OF LIABILITY</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR
                    AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                    INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER
                    DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES. <bdt class="block-container if" data-type="if" id="3c3071ce-c603-4812-b8ca-ac40b91b9943">
                        <bdt data-type="conditional-block">
                            <bdt class="block-component" data-record-question-key="limitations_liability_option"
                                data-type="statement"></bdt>
                            <bdt data-type="body">NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY
                                TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES
                                BE LIMITED TO <bdt class="block-container if" data-type="if"
                                    id="73189d93-ed3a-d597-3efc-15956fa8e04e">
                                    <bdt data-type="conditional-block">
                                        <bdt class="block-component" data-record-question-key="limitations_liability_option"
                                            data-type="statement"></bdt>
                                        <bdt data-type="body">THE
                                            AMOUNT PAID, IF ANY, BY YOU TO US<bdt class="block-container if" data-type="if"
                                                id="19e172cb-4ccf-1904-7c06-4251800ba748">
                                                <bdt data-type="conditional-block">
                                                    <bdt class="block-component"
                                                        data-record-question-key="limilation_liability_time_option"
                                                        data-type="statement"></bdt>
                                                </bdt>
                                            </bdt>
                                        </bdt>
                                        <bdt data-type="conditional-block">
                                            <bdt class="block-component"
                                                data-record-question-key="limitations_liability_option"
                                                data-type="statement"></bdt>
                                        </bdt>. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
                                        IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS
                                        APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO
                                        YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                                    </bdt>
                                </bdt>
                                <bdt class="statement-end-if-in-editor" data-type="close"></bdt>
                            </bdt></span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="indemnification" style="line-height: 1.5;"><a
                    name="_k5ap68aj1dd4"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">18.</span></strong></span>
                        </strong>INDEMNIFICATION</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">You agree to
                    defend, indemnify, and hold us harmless, including our subsidiaries,
                    affiliates, and all of our respective officers, agents, partners, and
                    employees, from and against any loss, damage, liability, claim, or demand, including
                    reasonable attorneys’ fees and expenses, made by any third party due to or
                    arising out of: <bdt class="block-container if" data-type="if"
                        id="475fffa5-05ca-def8-ac88-f426b238903c">
                        <bdt data-type="conditional-block">
                            <bdt class="block-component" data-record-question-key="user_post_content_option"
                                data-type="statement"></bdt>
                        </bdt>(<span style="font-size: 14.6667px;">1</span>) use of the Site; (<span
                            style="font-size: 14.6667px;">2</span>) breach of these Terms of Use; (<span
                            style="font-size: 14.6667px;">3</span>) any breach of your representations and warranties set
                        forth in these Terms of Use; (<span style="font-size: 14.6667px;">4</span>) your violation of the
                        rights of a third party, including but not limited to intellectual property rights; or (<span
                            style="font-size: 14.6667px;">5</span>) any overt harmful act toward any other user of the Site
                        with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your
                        expense, to assume the exclusive defense and control of any matter for which you are required to
                        indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will
                        use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to
                        this indemnification upon becoming aware of it.</span><span
                    style="color: rgb(89, 89, 89); font-size: 14.6667px;"></span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="userdata" style="line-height: 1.5;"><a
                    name="_ftgg17oha0ep"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                style="line-height: 115%; font-size: 19px;">19.</span></strong></span></strong>
                            </span></strong>USER DATA</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">We will maintain
                    certain data that you transmit to the Site for the purpose of managing the
                    performance of the Site, as well as data relating to your use of the Site. Although we perform regular
                    routine backups
                    of data, you are solely responsible for all data that you transmit or that
                    relates to any activity you have undertaken using the Site. You agree
                    that we shall have no liability to you for any loss or corruption of any such
                    data, and you hereby waive any right of action against us arising from any such
                    loss or corruption of such data.</span></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="electronic" style="line-height: 1.5;"><a
                    name="_dkovrslqodui"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">20.</span></strong></span>
                        </strong>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">Visiting the Site, sending us emails, and completing
                    online forms constitute electronic communications. You consent to receive electronic communications, and
                    you agree that all agreements, notices, disclosures, and other communications we provide to you
                    electronically, via email and on the Site, satisfy any legal requirement that such communication be in
                    writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND
                    TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR
                    VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules,
                    ordinances, or other laws in any jurisdiction which require an original signature or delivery or
                    retention of non-electronic records, or to payments or the granting of credits by any means other than
                    electronic means.</span></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" style="line-height: 1.5;"><br></div>
            <div class="MsoNormal" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">
                    <bdt class="block-component"></bdt>
                </span></span></div>
            <div class="MsoNormal" data-custom-class="heading_1" id="misc" style="line-height: 115%;"><a
                    name="_d4jvmcnxg0wt"></a><strong><span
                        style="line-height: 115%; font-size: 19px;"><strong><span
                                style="line-height: 115%; font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;">21.</span></strong></span>
                        </strong>MISCELLANEOUS</span></strong></div>
        </div>
        <div align="center" style="text-align: left; line-height: 1;"><br></div>
        <div align="center" style="text-align: left;">
            <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">These Terms of Use and any policies or operating rules
                    posted by us on the Site or in respect to the Site constitute the entire agreement and understanding
                    between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use
                    shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest
                    extent permissible by law. We may assign any or all of our rights and obligations to others at any time.
                    We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause
                    beyond our reasonable control. If any provision or part of a provision of these Terms of Use is
                    determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed
                    severable from these Terms of Use and does not affect the validity and enforceability of any remaining
                    provisions. There is no joint venture, partnership, employment or agency relationship created between
                    you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will
                    not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you
                    may have based on the electronic form of these Terms of Use and the lack of signing by the parties
                    hereto to execute these Terms of Use.</span></div>
            <div class="MsoNormal" style="line-height: 1;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">
                    <bdt class="block-component"></bdt>
                </span></div>
            <div align="center" style="text-align: left; line-height: 1.5;"><br></div>
            <div align="center" style="text-align: left;">
                <div class="MsoNormal" style="line-height: 1.5;"><br></div>
                <div class="MsoNormal" data-custom-class="heading_1" id="contact" style="line-height: 1.5;"><a
                        name="_t4pq5cwn486q"></a><strong><span style="line-height: 115%; "><span
                                style="font-size: 19px;"><strong><span
                                        style="line-height: 115%; font-size: 19px;"><strong><span
                                                style="line-height: 115%; font-size: 19px;">22.</span></strong></span>
                                </strong>CONTACT US</span></span></strong></div>
            </div>
            <div align="center" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" style="text-align: left;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size:11.0pt;line-height:115%;
      Calibri;color:#595959;mso-themecolor:text1;mso-themetint:166;">In order to resolve a complaint regarding the Site or
                        to receive further information regarding use of the Site, please contact us at:</span></div>
            </div>
            <div align="center" style="text-align: left; line-height: 1;"><br></div>
            <div align="center" style="text-align: left;">
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        style="font-size: 15px; line-height: 115%; color: rgb(89, 89, 89);">
                        <bdt class="block-container question question-in-editor"
                            data-id="8a6919c4-2010-e7d6-2305-d74dfb08909d" data-type="question"><strong>Swift Recharge
                                inc</strong></bdt>
                    </span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        ><strong><span style="font-size: 15px;">
                                <bdt class="question"><span ><strong><span
                                                style="font-size: 15px;">
                                                <bdt class="block-component"></bdt>
                                            </span></strong></span>4th avenue</bdt>
                                <bdt class="statement-end-if-in-editor"></bdt>
                            </span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        ><strong><span style="font-size: 15px;">
                                <bdt class="question"><span ><strong><span
                                                style="font-size: 15px;">
                                                <bdt class="block-component"></bdt>
                                            </span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        ><strong><span style="font-size: 15px;">
                                <bdt class="question">ajah</bdt>
                                <bdt class="block-component"></bdt>
                            </span></strong><strong><span style="font-size: 15px;">
                                <bdt class="block-component"></bdt>
                            </span></strong></span> <span ><strong><span
                                style="font-size: 15px;">
                                <bdt class="question">101233</bdt>
                                <bdt class="statement-end-if-in-editor"></bdt>
                            </span></strong></span></div>
                <div class="MsoNormal" style="line-height: 1.5;"><span ><strong><span
                                style="font-size: 15px;">
                                <bdt class="question"><span ><strong><span
                                                style="font-size: 15px;">
                                                <bdt class="block-component"></bdt>
                                            </span></strong></span></bdt>
                            </span></strong><strong><span style="font-size: 15px;">
                                <bdt class="question"><span ><strong><span
                                                style="font-size: 15px;">
                                                <bdt class="block-component"></bdt>
                                            </span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        ><strong><span style="font-size: 15px;">
                                <bdt class="block-component"></bdt>
                                <bdt class="question">Nigeria</bdt>
                                <bdt class="statement-end-if-in-editor"></bdt>
                            </span></strong></span></div>
                <div class="MsoNormal" style="line-height: 1.5;"><span ><strong><span
                                style="font-size: 15px;"><span ><strong><span
                                            style="font-size: 15px;">
                                            <bdt class="statement-end-if-in-editor"></bdt>
                                            <bdt class="statement-end-if-in-editor"></bdt>
                                        </span></strong></span></span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        ><strong><span style="font-size: 15px;">Phone:
                            </span></strong><strong><span style="font-size: 15px;"><span
                                    style="line-height: 115%; ">
                                    <bdt class="block-container question question-in-editor"
                                        data-id="dd6f266f-438b-bfdc-9204-0b17e109e270" data-type="question">09055560494
                                    </bdt>
                                </span></span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        style="font-size: 15px;"><strong><span ><span
                                    style="font-size: 15px;"><strong><span >
                                            <bdt class="block-component"></bdt>
                                        </span></strong></span></div>
                <div class="MsoNormal" data-custom-class="body_text" style="line-height: 1.5;"><span
                        style="font-size: 15px; line-height: 115%; color: rgb(89, 89, 89);">
                        <bdt class="block-container question question-in-editor"
                            data-id="fdc2b5b8-c95f-244b-23a7-287f82541348" data-type="question">
                            <strong>info@swiftrecharge.ng</strong></bdt>
                    </span></div>
            </div>
            <style>
                ul {
                    list-style-type: square;
                }
    
                ul>li>ul {
                    list-style-type: circle;
                }
    
                ul>li>ul>li>ul {
                    list-style-type: square;
                }
    
                ol li {
                    
                }
            </style>
        </div>`


        return (
                <div className=' appear-in' style={{ height: "100%", color: "#FF731599 !important", padding: "50px 25px", textAlign: "center !important", backgroundColor: "#ffffff90" }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tandcHTML) }}></div>
        );
}