export type Mentor = {
  id: string;
  name: string;
  number?: string;
  college: string;
  bio: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const mentors: Mentor[] = [
  {
    id: slugify('Omkar-VJTI'),
    name: 'Omkar',
    number: '9322090208',
    college: 'VJTI',
    bio: 'Final-year engineering mentor for placements and academics.',
  },
  {
    id: slugify('Abhishekh Jadhav-VJTI'),
    name: 'Abhishekh Jadhav',
    number: '9699024519',
    college: 'VJTI',
    bio: 'Helps with branch selection, internships, and coding prep.',
  },
  {
    id: slugify('Astitva Sharma-Lal Bahadur Shastri Maritime'),
    name: 'Astitva Sharma',
    number: '8828470275',
    college: 'Lal Bahadur Shastri Maritime',
    bio: 'Guides students on maritime academics and campus opportunities.',
  },
  {
    id: slugify('Vinay Rathi-Lal Bahadur Shastri Maritime'),
    name: 'Vinay Rathi',
    number: '8168495659',
    college: 'Lal Bahadur Shastri Maritime',
    bio: 'Mentor for campus life, exams, and domain-specific preparation.',
  },
  {
    id: slugify('Atharva-Orchid College Solapur'),
    name: 'Atharva',
    number: '8767618571',
    college: 'Orchid College, Solapur',
    bio: 'Shares practical advice for placements and project building.',
  },
  {
    id: slugify('Suraj Padwalkar-Orchid College Solapur'),
    name: 'Suraj Padwalkar',
    number: '9322415044',
    college: 'Orchid College, Solapur',
    bio: 'Supports students with interview prep and academic planning.',
  },
  {
    id: slugify('Tanishq Bhosale-Polaris School of Technology'),
    name: 'Tanishq Bhosale',
    college: 'Polaris School of Technology',
    bio: 'Mentors students on skills roadmap and campus resources.',
  },
  {
    id: slugify('Suryansh Dubey-Scaler School'),
    name: 'Suryansh Dubey',
    college: 'Scaler School',
    bio: 'Focuses on tech career direction and portfolio strategy.',
  },
  {
    id: slugify('Aditya Mamane-Terna College'),
    name: 'Aditya Mamane',
    number: '9699566146',
    college: 'Terna College',
    bio: 'Helps with semester planning and placement readiness.',
  },
];

export const normalizeCollege = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const colleges = Array.from(new Set(mentors.map((mentor) => mentor.college))).map((name) => ({
  name,
  id: normalizeCollege(name),
}));
