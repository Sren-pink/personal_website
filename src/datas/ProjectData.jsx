/* cover photos */
import pickpccover from "../assets/projectimages/pickyourpc/pickyourpc_cover.jpg";
import wellnesswebcover from "../assets/projectimages/wellness_web_2023/wellnessweb_cover.png";
import petcarecover from "../assets/projectimages/petcare/petcare_cover.jpg";
import fictionobjectcover from "../assets/projectimages/fictionalobject/fictionalobject_cover.jpg";
import routsycover from "../assets/projectimages/routsy/routsy_cover.png";
import dreamscover from "../assets/projectimages/dreams/dreams_cover.png";
import roadsafetycover from "../assets/projectimages/roadsafety/roadsafety_cover.jpg";

/* pick you pc photos */
import pc_part1 from "../assets/projectimages/pickyourpc/Part_1-_Picking_Out_The_CPU_.jpg";
import pc_part2 from "../assets/projectimages/pickyourpc/Part_3_Ram.jpg";
import pc_part3 from "../assets/projectimages/pickyourpc/Intel_Graphics.jpg";
import pc_part4 from "../assets/projectimages/pickyourpc/Final_-_Inspiring_24_ALL_IN_ONE.jpg";
import pc_part5 from "../assets/projectimages/pickyourpc/Untitled_Artwork1.jpg";

// Fictional Object project images
import fo_part1 from "../assets/projectimages/fictionalobject/ceramic_cutebowl.jpg";
import fo_part2 from "../assets/projectimages/fictionalobject/ceramicbowl.jpg";
import fo_part3 from "../assets/projectimages/fictionalobject/ceramicplate.jpg";
import fo_part4 from "../assets/projectimages/fictionalobject/woodenbowl.jpg";
import fo_part5 from "../assets/projectimages/fictionalobject/woodentallbowl.jpg";
import fo_part6 from "../assets/projectimages/fictionalobject/recipestrip.jpg";

export const projects = {
  'pick-your-pc': {
  id: 'pick-your-pc',
  title: 'Pick Your PC',
  year: 2023,
  p_a: 'academic',
  description: 'This project explores the concept of mapping through the lens of consumer decision-making. Pick Your PC breaks down the often overwhelming process of building or buying a personal computer into a clear, visual map. By charting out each key decision the project transforms a technical, jargon-heavy journey into an approachable guide. The map follows a branching structure, allowing users to trace personalized paths based on their priorities. Each node simplifies complex choices, helping users navigate trade-offs with clarity and confidence.',
  images: [pickpccover],
  artGallery: [
    {image: [pc_part1], caption: 'A CPU part so the users would have a clear understanding of the process'},
    {image: [pc_part2], caption: 'Allowing users to choose the amount of memory they prefer'},
    {image: [pc_part3], caption: 'Intel Graphics Visualization'},
    {image: [pc_part4], caption: 'An All-In-One PC'},
    {image: [pc_part5], caption: 'A Regular PC'},
  ],
},

  'recovered': {
    id: 'recovered',
    title: 'Recovered',
    year: 2023,
    p_a: 'academic',
    description: 'Recovered is a wellness-focused project aimed at promoting healthy eating and supporting users in tracking their physical health. It brings together diet monitoring and activity tracking into one streamlined system, making it easier for users to understand how their habits affect their overall well-being. The project encourages a more mindful relationship with food and movement by helping users set goals, log meals, and monitor progress over time. By combining nutritional awareness with physical health data, Recovered empowers users to take a more holistic and sustainable approach to personal wellness.',
    images: [wellnesswebcover],
    slideEmbed1_title: 'Wellness Web Wireframe',
    slideEmbed1: 'https://embed.figma.com/proto/grxxlwAfTucEsEvjO8LArZ/Wireframe-Section?node-id=18-46&embed-host=share',
    slideEmbed2_title: 'Wellness Web Wireframe',
    slideEmbed2: 'https://embed.figma.com/proto/grxxlwAfTucEsEvjO8LArZ/Wireframe-Section?node-id=18-46&embed-host=share',
  },

  'pet-care': {
    id: 'pet-care',
    title: 'Pet Care',
    year: 2024,
    p_a: 'academic',
    description: 'Pet Care is an educational web project designed to teach children the importance of responsible pet ownership through playful, interactive design. The experience is structured to be engaging and age-appropriate, using visuals, friendly prompts, and feedback loops to reinforce healthy habits. Built using HTML, CSS, and JavaScript, the site is optimized for accessibility and ease of use. The project combines UX principles with meaningful learning outcomes, turning pet care into a fun, informative digital experience for kids.',
    images: [petcarecover],
  },

  'fictional-object': {
    id: 'fictional-object',
    title: 'Fictional Object',
    year: 2024,
    p_a: 'academic',
    description: 'This conceptual design turns the bowl itself into a guide by using a reusable recipe strip that wraps around the outer rim. It provides step-by-step visual instructions directly on the object. It is ideal for beginner cooks, visual learners, or anyone tired of juggling screens. Made from platinum-cured silicone, the strip is food-safe, heat-resistant, washable, and flexible enough to fit various bowl sizes. A micro-suction backing allows it to cling securely without slipping or leaving residue. Each strip features icon-based recipes for meals like salads, noodles, or overnight oats, turning the bowl into a modular, collectible kitchen tool.',
    images: [fictionobjectcover],
    artGallery: [
      {image: [fo_part1], caption: 'Original idea of a cute bowl and recipe strip idea'},
      {image: [fo_part2], caption: 'Simple ceramic bowl design'},
      {image: [fo_part3], caption: 'Simple ceramic plate design'},
      {image: [fo_part4], caption: 'Simple wooden bowl design'},
      {image: [fo_part5], caption: 'Simple wooden tall bowl design'},
      {image: [fo_part6], caption: 'A reusable strip that can be taped on the face of the bowls/plates'},
    ],
  },

    'road-safety': {
    id: 'road-safety',
    title: 'Road Safety',
    year: 2024,
    p_a: 'academic',
    description: 'This project investigates road safety concerns in Boston through the lens of urban design and user experience. By analyzing accident data, observing traffic behavior, and gathering user feedback from bikers and drivers, we identified key problem areas contributing to daily risk. The final proposal includes an interactive map and redesigned signage system aimed at reducing accidents, enhancing bike lane visibility, and promoting mutual awareness between road users. Emphasis was placed on accessibility, environmental context, and long-term sustainability in city planning.',
    images: [roadsafetycover],
    slideEmbed1_title: 'Road Safety Slide',
    slideEmbed1: 'https://www.canva.com/design/DAGXNadMs0Y/rTs0RqphxKH-5Lmz_PJmNQ/view?embed',
  },

  'routsy': {
    id: 'routsy',
    title: 'Routsy',
    year: 2025,
    p_a: 'personal',
    description: 'Routsy is a personal wellness app designed to make using aroma diffusers feel effortless and intentional. The app simplifies control over diffuser routines, letting users schedule start/stop times, set recurring timers, and personalize daily scent experiences without needing to manually turn anything on. Inspired by busy routines and the desire for a calmer atmosphere, Routsy blends utility and comfort — helping users build mindful rituals through automation. The design focuses on clarity, minimalism, and emotional tone, creating a user-friendly flow that encourages consistency and ease.git',
    images: [routsycover],
    slideEmbed1_title: 'Routsy Slide',
    slideEmbed1: 
  'https://www.canva.com/design/DAGizzXKtYU/K3o28qsVyuSjVJQRmzHz5w/view?embed',
  slideEmbed2_title: 'Routsy Prototype',
    slideEmbed2: 
    'https://embed.figma.com/proto/HNEQuJOdaJAGsfU5zmoTkn/Final-Prototype?node-id=37-5152&p=f&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=37%3A5152&show-proto-sidebar=1&embed-host=share',
  },

  'dreams': {
    id: 'dreams',
    title: 'Dreams',
    year: 2025,
    p_a: 'personal',
    description:
    "This personal project invites users to reflect on their dreams and how they feel upon waking. It centers on a gentle journaling experience designed to help users process emotions, recognize recurring themes, and build a habit of self-awareness. By writing about their moods, imagery, and sensations after sleep, users gain a deeper understanding of their inner world. The interface emphasizes calm visuals, open-ended prompts, and space for vulnerability and encouraging emotional clarity through small, daily acts of reflection.",
    images: [dreamscover],
    slideEmbed1_title: 'Dreams Presentation',
    slideEmbed1:
      'https://embed.figma.com/deck/IPaKZp36jy0YGM5SHiaQvq/Untitled?node-id=1-42&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share',
    slideEmbed2_title: 'Dreams Prototype',
    slideEmbed2:
      'https://embed.figma.com/proto/irf0rqabQt9Oh5GCPMTyO7/Untitled?node-id=31-592&p=f&scaling=min-zoom&content-scaling=fixed&page-id=30%3A562&starting-point-node-id=31%3A592&embed-host=share',
  },
};
