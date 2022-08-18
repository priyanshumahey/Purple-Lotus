import './child.css';
import React, { useState } from 'react';

function Child () {
    const [screen1, setScreen1] = useState(true);
    const [screen2, setScreen2] = useState(false);
    const [screen3, setScreen3] = useState(false);

    const screenChange1 = () => {
        setScreen1(!screen1)
        setScreen2(!screen2)
    }

    const screenChange2 = () => {
        setScreen2(!screen2)
        setScreen3(!screen3)
    }
    
    
    return(
        <div className='main'>
        {screen1 && 
            <>
            <h1>Welcome!</h1>
            <p className='pmain'>
                This is our prototype!
                For now, this prototype will only give you a basic introduction.
                Click on continue to view the basic idea of what the modules will include!
                Then, you will be able to view a sample module.
            </p>
            <button className='Cont' onClick={screenChange1}>Continue</button>
            </>
        }
        {
           screen2  && 
           <div className='page3'>
           <h1>Purple Lotus</h1>
           <h2>User: Asian Canadian Youth</h2>

           <br></br>
           <h3>Module 1: Introduction</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Terminology, Background</p>
           <p className='pmain2'>This module is highly informational and goes over misconceptions, stigma and introduces people onto how to use Purple Lotus.
           It also introduces mental well-being and provides more information on what general mental health is.</p>
           
           
           <br></br>
           <h3>Module 2: Mental Illnesses and Disorders</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Depression, Anxiety, ADHD, OCD, schizophrenia</p>
           <p className='pmain2'>This goes over common mental illnesses and disorders.
           Will also provide toolkits to self-test for mental health conditions.</p>
           
           <br></br>
           <h3>Module 3: Personal Identity and Cultural Identity</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Feelings of "Other-ness", Gender and Traditional Expectations, LGBTQ+</p>
           <p className='pmain2'>This module goes over identity and the intricacies of identity. 
           It also goes into what it means to be part of the community and associating with your culture.
           This part has a special section for gender and sex as well.</p>

           <br></br>
           <h3>Module 4: Racism and Discrimination</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Internalized Racism, Unlearning Limiting Beliefs, Dealing with Racism</p>
           <p className='pmain2'>
            Racism and discrimination can truly upset someone's well being. In this module, we go over what racism and discrimination can look like,
            what people can do about it and how to move past it. This also breaks down internalized racism and helps teach how to unlearn beliefs that 
            may affect a person and hold them back.
           </p>

           <br></br>
           <h3>Module 5: Communicating Mental Health With Parents and Family Members</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Stigma, Honour, Expectations, Rewiring Terminology Surrounding Mental Health, Setting Boundaries, Intergenerational Trauma</p>
           <p className='pmain2'>
           Includes a toolkit available in different languages. This module goes over discussing mental well being with the family with special respect
           to cultural stigma and langauge.
           </p>

           <br></br>
           <h3>Module 6: Getting Help and Making the Most of Mental Health Resources</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Types of Therapy, Counseling Styles, What Therapy Might Look Like, Holistic Therapy, Resources for Asian Canadians</p>
           <p className='pmain2'>
            This module goes over how to get help and use mental health resources in a productive manner. 
           </p>

           <br></br>
           <h3>Module 7: How To Support Someone With Mental Health Issues</h3>
           <p className='pmain2'><strong>Example Topics:</strong> Initiating the Conversation, Setting Boundaries</p>
           <p className='pmain2'>
            This module describes how to recognize when others are struggling with mental health issues and discusses how to help them.
            It goes over boundaries with others and discusses important tactics in assisting others past their own mental health issues.
           </p>

            <br></br>
           <button className='Cont' onClick={screenChange2}>Continue</button>
           <br />
            <br></br>
            <br></br>
            <br></br>
           </div>
        }
        {
           screen3  && 
           <div className='prototype'>
           <h1>For Youth</h1>
           <h2>Preface</h2>
           <p>
                These modules are still early in development! This current build is primarily 
                for demonstration purposes and proof of concept! The current build is a stable 
                build missing core features which will be present further on down the line. 
                For now, feel free to explore the current version and enjoy the demo! 
                The demo version only demonstrates Chinese Canadian youth and only has support
                for English and Mandarin. Future versions will include further language support, 
                further culture support as well as more accessibility options and continued 
                support for various groups.
                <br />
                <br></br>
                <strong>This prototype is still in work and only demonstrates what is possible.</strong>
            </p>
            <h2>Overview</h2>
            <p>
                This module is focused on Chinese Canadian youth. This is meant to be a 
                self-help module/guide built off of the shoulders of other Chinese 
                Canadians to help walk through the commonly encountered mental health issues. 
                <br />
                <br></br>
                This demo goes over 2 main topics. Feel free to pick and choose based on 
                which one is most relevant to you.
                <ol>
                    <li>Topic 1 will consist of going over the topic of name and identity.</li>
                    <li>Topic 2 will go over the topic of food and lunches.</li>
                </ol>
            </p>
            <h2>Topic 1: Name and Identity</h2>
            <p>
            Hello! Welcome to topic 1! Name and identity are an important part of everyone's character 
            and are highly important. For name and identity, this module will cover the following:
            <ol>
                <li>How you were given your name</li>
                <li>The importance of name</li>
                <li>The dual name citizenship</li>
                <li>Immigrant experiences with name</li>
                <li>Overview of mental wellness associated with name</li>
                <li>Learning to accept your name</li>
            </ol>
            </p>
            <h3>1. How you were given your name</h3>
            <p>
                Names are a highly sacred thing in many cultures. In Chinese culture, names are special. 
                Chinese families typically use two or more different syllables from the Chinese alphabet. 
                They can then be combined and manipulated to create a highly unique and special name. 
                This varies throughout different parts of China as there exists a large amount of 
                diversity between the cultural groups and traditions in China.
                <br />
                <br></br>
                Parents may often name their children based on wishes for their children, for instance names 
                that include the terms for beauty, grace, and fortune.
                <br />
                <br></br> 
                The way your parents named you was probably highly dependent on their values and the way 
                that they were raised. If you don't know, go ahead and ask them about how they named you! 
                Names are an important part of understanding yourself and your parents would definitely 
                love to tell you more about how you were named! It's also a good bonding activity to 
                understand why they decided your name to be what it is.
                <br />
                <br></br> 
                Chinese names are often unisex and are not often gendered unlike how many names in the 
                West are. Chinese names are versatile and often lack the ability to be gendered. 
                For last names, it is also a bit different from how it is done in the West. 
                In the West, there are a huge variety of last names yet you may notice that Chinese 
                last names tend to show a bit less variety. Surnames in many western regions may 
                actually be derived from professions or even used to distinguish people who had the 
                same first names but needed to be distinguished between. 
                In China, some surnames are highly common, for instance Wang, Chen and Zhao. 
                Researchers believe this is due to the Galton-Watson process which is leading to name extinction. 
                Rare and unpopular surnames face extinction due to the digital age and the evolving population.
                 There have been numerous issues with needing to change surnames and accounting for the digital age and 
                limited characters. Some surnames that relied on rarer characters may not be able to be 
                digitalized and this can lead to surname extinction.
                <br />
                <br></br> 
                To learn more about your name and come to learn more about yourself, talk to your parents about your names and their names as well.
            </p>
            <h3>2. The importance of name</h3>
            <p>
                Names are important as they give us a sense of individuality and provide us a sense of who we are. 
                They allow us to establish a sense of belonging and allow us to fit into communities. 
                Having a name that's different from others may make us feel weird or out of place. Names have a lasting 
                impact on a person and people associate themselves strongly with their name.
                <br />
                <br></br> 
                As a Child, the importance of names is typically not there and many children get mocked for their unique or 
                different names. When you were much younger, there is a chance that others pointed out that your name was 
                different and this can lead to a feeling of getting "othered". Getting othered is the effect of being made 
                to feel that someone is different from other people around them based on culture, language or even name.
                <br />
                <br></br> 
                Name based microaggressions are described as mispronouncing someone's name, assigning them with a different name to 
                make when it's unwanted, making fun of a name, etc. These situations can all affect the mental well-being of a person by 
                leading to negative thoughts about their name, culture and identity. It is important to pronounce someone's name and 
                place respect on their name. It is an important part of identity. Remember that you deserve to choose the name you'd 
                like to be called and you deserve to have your name pronounced right. No one is allowed to give you a nickname you 
                don't like simply because they cannot say your name correctly.
                <br />
                <br></br> 
                To pronounce other people's name, the best way to do it is practice until you get it right. It might take some time but 
                repeat it right after you've learnt it to better understand the pronunciation. When other people pronounce your name 
                wrong, it is important to correct them every time they do in order to make sure they actually learn your name properly. 
                One way to help people to better pronounce your name is to spell it out phonetically or even use an online tool to help 
                you with that.
                <br />
                <br></br> 
                Holding names to white, Eurocentric, American standards causes deep harm. It leads to people wanting to change their 
                name or even wishing they were a different identity. This is due to a deep desire to fit in and not want to feel like an 
                alien in the place you currently reside and are looking to belong. It can make you feel like an outsider in your own 
                community and that lack of inclusivity has a truly negative impact on your well-being.
            </p>
            <h3>3. The dual name citizenship</h3>
            <p>
                For some Chinese people, they may have both a Chinese name and an English name. For some, their Chinese name may be their legal 
                name and their English name may be their preferred name or vice versa. Either way, just remember that both names belong to you and you 
                get to choose which one you'd like to be called. It can be hard knowing which name to go by as you may feel like some may 
                belittle you for going by your Chinese name or you feel shameful taking your English name and feel like you're forgoing your 
                Chinese name and background. 
                <br />
                <br></br> 
                A lot of people report feeling shame for not going by their Chinese name as they feel they are leaving behind their identity 
                and this causes them much mental turmoil. This can lead to identity issues. For proper mental well being, it is fairly 
                important to understand the way you feel about your own name. If you want to get more used to specific names, exposure therapy can be 
                really helpful. Try to get your parents to call you by the name you want and not the name you feel you should have due to external 
                pressures. Preferred names are more common here in the west and it is completely ok to choose your name. 
            </p>
            <h3>4. Immigrant experiences with name</h3>
            <p>
                For immigrants, name related isues are fairly abundant. For some, changing their name is simply a part of the immigration process
                and can be seen as a neccessary sacrafice to be made in order to honor the efforts and time spent moving to another country. For others,
                their names might be highly important as it connects them to their culture or to their homeland. For some, translating their name into English
                can cause friction and may not translate well. Especially moving to new places and not knowing what it will be like, it can very scary. For new
                immigrants, it may be instinct to change their name in fear of being othered and not fitting in. For parents, it may be instinct to change their 
                children's name or create nicknames for them in order to fit in better.
                <br />
                <br></br> 
                One important thing new immigrants can do is associate themselves with people similar to them. For new Chinese immigrants, it may be hugely
                benefical to find the local Chinese community in order to better fit in and make friends that will be able to understand you and connect with you.
                There may be a fear of associating too much with the Chinese community and a fear of feeling othered but it is important to remember that you can associate
                with multiple groups.
                <br />
                <br></br>
                Another important thing to be highly considerate about as youth is the impact of immigration on parents. While the lives of a youth may be changed during 
                immigration, remember that parents had to often leave a lot more behind, very often, coming here with no job or anything else lined up. It is a good idea to 
                be considerate about their experiences. A good bonding activity would be to ask your parents on how they felt about moving to Canada and how they experineced 
                the change in identity. If they changed their name, asked them about why they did and how it made them feel.
            </p>
            <h3>5. Overview of mental wellness associated with name</h3>
            <p>
                The biggest issues that come out of names can be the feelings of being excluded from a group or feel like you are not included in a community. Names
                can be very important for fitting in and it can feel horrible being among a group of people who may not even be able to pronounce your name properly. 
                These sort of issues can be really troubling can cause a lot of shame when using your English name. When using English names, you may feel like you're hiding
                something from others by not telling them your "real" name, but again, it is important to remember that both names are your real name.
                <br />
                <br></br>
                It is highly important to find off a group you connect with and will accept you for who you are without judgment of your name. Good friends and good communities
                will help you feel more comfortable with your name and identity. It's a good idea to encourage others as well and build the community you would like to have amongst your friends.
            </p>
            <h3>6. Learning to accept your name</h3>
            <p>
                Names are an important part of your identity. Whether you have one of them or two of them, or potentially even more, 
                they are all you. All the names you've ever had are a part of you and you are not lying to anyone when you introduce 
                them with one name instead of another. Ultimately it is up to you to decide what you want other people to call you 
                and you are allowed to always choose a preferred name.
                <br />
                <br></br>  
                An important thing to acknowledge is that people do have preferred names. In schools, workplace, with friends and 
                even with family, you are allowed to set the name you would like to be called. While it may at times bring you shame 
                choosing a preferred name over a legal name, realize that many people do create preferred names for themselves and 
                many forms now have options for people to enter in their preferred names. 
 
            </p>
            <h2>Topic 2: Lunch</h2>
            <p>
                Another impactful topic for many, lunch can be a very concerning  time. 
                Many Chinese people have had their food called disgusting or smelly. 
                During lunch time, many Chinese youth have experienced bullying for 
                their lunches and this has led many to feel othered and feel ashamed for 
                their food. Sometimes this will lead Chinese youth to go eat their lunches 
                away from others or not even eat their lunch in fear of judgment.
                <br />
                <br></br>
                The second module would be focused on walking through the issues 
                brought up with cultural foods during youth. Furthermore, this module 
                will be designed around helping teach tactics about how to get others 
                around you to be more understanding of cultural food.
            </p>
            <h2>Future goals</h2>
            <p>
                Going into the future, we will include more in depth guides on mental health and 
                mental well being. There will be more modules that are centered around understanding
                mental health from scratch, including basics of how mental well-being works, 
                different sorts of mental illnesses, how to understand your own emotions, etc. 
            </p>
           </div>
        }
        </div>
    )
}

export default Child;