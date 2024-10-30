const CONSTANT = {
    CONTEXT_DB_NAME: `Ford_Xiaomi.db`, 
    LLM_TASK_ID:'',
    BREIF_BG_INFO: `According to Taiwan's China News Network reported on October 24, the United States Ford Motor Company CEO (CEO) Jim Farley revealed that in the past six months he has been driving the SU7 electric car made by China's Xiaomi company, but also to think about how to compete with the Chinese auto industry in the future. He said he no longer wanted to drive his old car. According to reports, in a foreign podcast, Farley and host Robert Llewellyn talked about China's electric vehicle industry and how the traditional winner of the auto industry is coping with the wave of electric vehicle transformation. Farley said the rapid growth of electric vehicles around the world has not changed, and it is the winners and losers within the industry that are changing dramatically. And it's not just the car industry that's changing. It's the global industrial manufacturing landscape. While Americans are thinking about how to build electric structures and software applications, China's electric vehicle market has begun to segment, the fastest growing market is extended-range hybrids, and China has a cost advantage. This is also changing global markets and consumer brand preferences. Host Llewellyn also mentioned that when he went to Australia to visit relatives this year, he found that two of his relatives who were not interested in cars had changed to BYD (308.140, 4.46, 1.47%). The same is true in Australia's fuel car market, where the top-selling SUV is not a Toyota or Ford but a Great Wall Haver, Farley says solemnly. Farley points out that when a new technology hits the ground, there is a test of cost. As with Henry Ford and the Model T, the lower-cost side will have the opportunity to sell to the higher-cost market. Given that Made in China has proven itself around the world over the past few years, consumers don't feel they have to take a big risk when buying a Chinese car. For Ford, the constant topic of discussion is how to compete with Chinese automakers and then survive. Mr Farley says his two visits to China in the past two years have been aha moments for him. He lamented that in Western countries, everyone has been talking about Apple cars, but the Chinese Apple Xiaomi car has been on the road, and now it can sell 10,000 to 20,000 units every month. Xiaomi, he said, was already a giant in the industry and a stronger consumer brand than car companies. Farley revealed that Ford managed to get a Xiaomi SU7 from Shanghai to Chicago, and he has been driving it for six months now, and plans to continue driving it.`,
    CHARACTER_SYSTEM_PROMPT: 'Please generate a character in several keywords.',
    COMMENT_SYSTEM_PROMPT: 'You have the freedom of speech. Please generate a short, witty, and engaging Twitter-like comment, using popular internet slang and memes for a fun and relatable vibe, in response to a user-provided tweet. Please REPLY the COMMENT only.',
    KEYWORD_SYSTEM_PROMPT: `Please reply a keyword based on the user request only.`,
    USER_CHARACTER_PROMPT: `Please generate a Twitter User's character based in several keywords that likes Xiaomi in the background information. Reply the keywords only. `,
    USER_CHARACTER_PROMPT_2: `Please generate a Twitter User's character based in several keywords that hates Xiaomi in the background information. Reply the keywords only. `,
    USER_KEYWORD_PROMPT: `Please reply a keyword for the background information.`,
    USER_CHARACTER_UPDATE_PROMPT:  `Please note that this is your previous character: `, 
    USER_CHARACTER_UPDATE_PROMPT_2: `Please note that these are the sentences you've said today:  `,
    USER_CHARACTER_UPDATE_PROMPT_3: `Please generate a new character after you read the above information.`,
    USER_TWEETS_INFO_UPDATE_PROMPT: `Please note that this is your previous knowledge: `,
    USER_TWEETS_INFO_UPDATE_PROMPT_2: `Please note that these are the sentences you've read today: `,
    USER_TWEETS_INFO_UPDATE_PROMPT_3: `Please summarize the knowledge based on the above information.`,
}

module.exports = CONSTANT;