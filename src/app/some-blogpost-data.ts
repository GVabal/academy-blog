import {Post} from './interfaces/Post';

const someBlogpostData: Post[] = [
  {
    author: 'Janis Janka',
    title: 'Blogpost #X',
    date: '2020-04-01',
    content: 'Some text, such is the text. Some text, such is the text. Some text, such is the text. ' +
      'Some text, such is the text. Some text, such is the text. Some text, such is the text. Some text, ' +
      'such is the text. Some text, such is the text. Some text, such is the text.',
    image: {
      src: 'assets/hypercube.jpg',
      alt: 'hypercube'
    }
  },
  {
    author: 'Peter Parker',
    title: 'Pictures of Our Local Hero',
    date: '2020-02-11',
    content: 'You wanted more pictures of our local hero Spiderman? Well, here you go! This one took me lots' +
      ' of effort as he was on a secret mission as I learned after I took a picture and some guys started shouting ' +
      'at him "GET HIM!" or something like that. Anyways, here it is, for your entertainment!',
    image: {
      src: 'assets/spiderman.jpg',
      alt: 'spiderman'
    }
  },
  {
    author: 'Tobby L. Romney',
    title: 'New Wife, Old Shoes',
    date: '2019-12-04',
    content: '“There’s a picture that’s making the rounds today — the shoe shine on the tarmac,” Kornacki explained.' +
      ' “I don’t know if you saw this one. I don’t know where this came from… He’s sitting in front of an airplane.' +
      ' I think it might be a corporate jet, and he’s wearing a suit and he’s getting a shoe shine. He’s got a big' +
      ' smile on his face.”',
    image: {
      src: 'assets/shoes.jpg',
      alt: 'shoes'
    }
  },
  {
    author: 'Kevin Leaves',
    title: 'Dude, Where Is My Burger?',
    date: '2019-07-27',
    content: 'Really any burger where the exterior of the buns are covered by something repels me. By the time I finish' +
      ' my meal everything would be covered by the sauce. And the bun halfway through would fall apart in a mush. Why are ' +
      'people so in love with burgers where the bottom bun is a sopping wet mess that looks like it will disintegrate when' +
      ' you pick it up to take a bite?',
    image: {
      src: 'assets/burger.jpg',
      alt: 'burger'
    }
  },
  {
    author: 'Donald Fauntleroy Duck',
    title: 'Open Letter to Bill Gates',
    date: '2019-05-20',
    content: 'Quack - quack - quack - quack quack - quack - quack - quack - quack. Schna - schna - schna - schna - schna - ' +
      'schna - ta. Schnati - schnati - schnati - ho. ZaPF - ZaPF - ZaPF - ZaPF - ZaPF. gikgak - gikgak - gi!',
    image: {
      src: 'assets/duck.png',
      alt: 'duck'
    }
  }
];

export default someBlogpostData;
