## How to Use

1. clone the repo
2. copy the scroller folder into some of your project folders (example in components)
3. import the Scroller.vue and useScroller.js in the component you want to use it in like so:

import Scroller from '@/components/scroller/Scroller.vue"  
import useScroller from '@/components/scroller/useScroller.js"

4. in the same components in your setup() method, add this code:

const sections = ['sectionOneId', 'sectionTwoId', sectionThreeId', 'etc'];  
const { currentSection, scrollToSection } = useScroller(sections);

5. register the component as per usual:

components: { Scroller }

6. lastly use it in the template:

<scroller :sections="sections :current="currentSection" @changed=scrollToSection ></scroller>

### Note: in your template, where you use the scroller, make sure to name the id's of your sections that you want the scroller to work with, and in step 4. provide the section id's in the array named "sections", with the exact same id names as you named your sections. (Sections can be any element, not nessecarily a "< section >". You can use litteraly any other element.)

### Last Note (promise xD): You can modify the Scroller.vue template, and style the links whatever to wahtever you want. Images, SVGs, a, div.. etc. Just make sure to not touch the class and the dynamic :class, so you have the status indicator style, and if you don't like the default color (orange), modify the .active class in the Scroller.vue css.

Any questions, or merge requests, feel free to send, I don't plan doing anything big out of this, I just wanted something custom for myself, and I did it. I know it might not be the best practice in the world, since I am just beginning, but I am open for suggestions. Thank you! <3
