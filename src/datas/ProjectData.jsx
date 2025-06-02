// Cover photos
import pickpccover from "../assets/projectimages/pickyourpc/pickyourpc_cover.jpg";
import wellnesswebcover from "../assets/projectimages/wellness_web_2023/wellnessweb_cover.png";
import petcarecover from "../assets/projectimages/petcare/petcare_cover.jpg";
import fictionobjectcover from "../assets/projectimages/fictionalobject/fictionalobject_cover.jpg";
import routsycover from "../assets/projectimages/routsy/routsy_cover.png";
import dreamscover from "../assets/projectimages/dreams/dreams_cover.png";
import roadsafetycover from "../assets/projectimages/roadsafety/roadsafety_cover.jpg";

// Pick Your PC images
import pc_part1 from "../assets/projectimages/pickyourpc/Part_1-_Picking_Out_The_CPU_.jpg";
import pc_part2 from "../assets/projectimages/pickyourpc/Part_3_Ram.jpg";
import pc_part3 from "../assets/projectimages/pickyourpc/Intel_Graphics.jpg";
import pc_part4 from "../assets/projectimages/pickyourpc/Final_-_Inspiring_24_ALL_IN_ONE.jpg";
import pc_part5 from "../assets/projectimages/pickyourpc/Untitled_Artwork1.jpg";

// Fictional Object images
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
    description: 'Pick Your PC breaks down the often overwhelming process of building or buying a personal computer into a clear, visual map...',
    images: [pickpccover],
    artGallery: [
      { image: pc_part1, caption: 'CPU choice for clearer understanding' },
      { image: pc_part2, caption: 'RAM options for memory preference' },
      { image: pc_part3, caption: 'Intel graphics display' },
      { image: pc_part4, caption: 'All-in-one PC option' },
      { image: pc_part5, caption: 'Standard PC setup' },
    ],
  },

  'recovered': {
    id: 'recovered',
    title: 'Recovered',
    year: 2023,
    p_a: 'academic',
    description: 'Recovered promotes healthy eating and tracking physical health using a unified design...',
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
    description: 'A child-focused educational site about responsible pet ownership using UX principles.',
    images: [petcarecover],
  },

  'fictional-object': {
    id: 'fictional-object',
    title: 'Fictional Object',
    year: 2024,
    p_a: 'academic',
    description: 'A conceptual cooking aid using silicone recipe strips that cling to bowls for visual step-by-step guidance.',
    images: [fictionobjectcover],
    artGallery: [
      { image: fo_part1, caption: 'Cute concept with recipe strip' },
      { image: fo_part2, caption: 'Ceramic bowl design' },
      { image: fo_part3, caption: 'Ceramic plate design' },
      { image: fo_part4, caption: 'Wooden bowl design' },
      { image: fo_part5, caption: 'Tall wooden bowl' },
      { image: fo_part6, caption: 'The reusable recipe strip in use' },
    ],
  },

  'road-safety': {
    id: 'road-safety',
    title: 'Road Safety',
    year: 2024,
    p_a: 'academic',
    description: 'An urban design project analyzing traffic risks in Boston and proposing data-informed solutions.',
    images: [roadsafetycover],
    slideEmbed1_title: 'Road Safety Slide',
    slideEmbed1: 'https://www.canva.com/design/DAGXNadMs0Y/rTs0RqphxKH-5Lmz_PJmNQ/view?embed',
  },

  'routsy': {
    id: 'routsy',
    title: 'Routsy',
    year: 2025,
    p_a: 'personal',
    description: 'Routsy simplifies diffuser routines by letting users schedule scent automation through a wellness-first app.',
    images: [routsycover],
    slideEmbed1_title: 'Routsy Slide',
    slideEmbed1: 'https://www.canva.com/design/DAGizzXKtYU/K3o28qsVyuSjVJQRmzHz5w/view?embed',
    slideEmbed2_title: 'Routsy Prototype',
    slideEmbed2: 'https://embed.figma.com/proto/HNEQuJOdaJAGsfU5zmoTkn/Final-Prototype?node-id=37-5152&p=f&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=37%3A5152&show-proto-sidebar=1&embed-host=share',
  },

  'dreams': {
    id: 'dreams',
    title: 'Dreams',
    year: 2025,
    p_a: 'personal',
    description: 'A self-reflection journal for dream logging that helps users build emotional clarity through gentle prompts and imagery.',
    images: [dreamscover],
    slideEmbed1_title: 'Dreams Presentation',
    slideEmbed1: 'https://embed.figma.com/deck/IPaKZp36jy0YGM5SHiaQvq/Untitled?node-id=1-42&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share',
    slideEmbed2_title: 'Dreams Prototype',
    slideEmbed2: 'https://embed.figma.com/proto/irf0rqabQt9Oh5GCPMTyO7/Untitled?node-id=31-592&p=f&scaling=min-zoom&content-scaling=fixed&page-id=30%3A562&starting-point-node-id=31%3A592&embed-host=share',
  },
};
