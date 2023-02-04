import React, { useState } from 'react';
import LikeButton from './svg';
import Footer from './footer';

function Navigation() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  // const [hover, setHover] = useState(false);
  const [likes1, setlikes1] = useState(0);
  const [likes2, setlikes2] = useState(0);
  const [likes3, setlikes3] = useState(0);
  const [likes4, setlikes4] = useState(0);
  const [likes5, setlikes5] = useState(0);
  const [likes6, setlikes6] = useState(0);
  // const [likes7, setlikes7] = useState(0);

  // const [likeEmoji] = useState("👍");

  const buttons = ['rVidya', 'Chapters', 'Subjects', 'ContactUs', 'Signout'];
  // const getStyles = () => {
  //   return {
  //     last: {
  //       backgroundColor: hover ? "lightgray" : "white",
  //       cursor: "pointer"
  //     }
  //   };
  // };

  return (
    <div>
      <nav style={styles.container}>
        <div style={styles.brandContainer}>
          <div
            style={{
              ...styles.brand,
              ...(hoverIndex === 0 && styles.hover)
            }}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            rVidya
          </div>
        </div>
        <div style={styles.buttonsContainer}>
          {buttons.slice(1).map((button, index) => (
            <div
              key={button}
              style={{
                ...styles.button,
                ...(hoverIndex === index + 1 && styles.hover)
              }}
              onMouseEnter={() => setHoverIndex(index + 1)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              {button}
            </div>
          ))}
        </div>
      </nav>
      <h1 style={styles.heading}>Company Management 2</h1>
      <h2 style={styles.subHeading}>Chapter 1</h2>
      <div styles={styles.qnabuttons}>
      <div style ={styles.p3}>
      <hr style={styles.hr} />
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>1. Who is responsible for setting the company goal and objective?</div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}>The Board of Directors</div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes1(likes1 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes1}</div>
          </button>
          </div>
        </div>
      </div>
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>2. Which of the following is not a role of Manager in a Company ?</div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}>Marketing and Sales</div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes2(likes2 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes2}</div>
          </button>
          </div>
        </div>
      </div>
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>3. What is the main purpose of a company's organizational chart?</div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}>To show the hierachy of the company</div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes3(likes3 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes3}</div>
          </button>
          </div>
        </div>
      </div>
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>4. What is a performance appraisal used for in a company?</div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}> All of the above </div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes4(likes4 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes4}</div>
          </button>
          </div>
        </div>
      </div>
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>5. What is an important function of a company human resource department?</div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}>All of the above</div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes5(likes5 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes5}</div>
          </button>
          </div>
        </div>
      </div>
      <div style={styles.mydiv}>
      {/* {...styles.questionContainer, ...styles.shadow} */}
        <div style={{...styles.question,...styles.p}}>6. What is a major benifit of implementing a company wide policy and procedure manual? </div>
        <br></br>
        <div style={{...styles.answer,...styles.p}}>All of the above</div>
        <br></br>
        <div style={{...styles.likeContainer,...styles.likediv}}>
        <div style ={{...styles.fixed,...styles.likediv}}>
        {/* <LikeButton /> */}
          <button style={{...styles.likeButton,...styles.rest}} onClick={() => setlikes6(likes6 + 1)}>
          <LikeButton />
          <div style={styles.likeCount}>{likes6}</div>
          </button>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div style={{...styles.containerform}}>
      {/* <div style={{...styles.contact1,...getStyles().last}} onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>Add question</div> */}
      <div style={styles.contact1}>Add question</div>

      </div>
      <div style={styles.containerform}>
      <div style={styles.contact1}>Next Chapter</div>
      </div>
      <div style={styles.containerform}>
      <div style={styles.contact1}>Back</div>
      </div>
      <div style={styles.random}>

      </div>
      <Footer />
    </div>
  );
}
// const styles = {
//   heading: {
//     textAlign: 'center',
//     fontSize: '30px',
//     marginTop: '0px'
//   },
//   subHeading: {
//     textAlign: 'center',
//     fontSize: '20px',
//     marginTop: '10px'
//   },
//   hr: {
//     border: '1px solid black',
//     width: '60%',
//     margin: '0 auto',
//     marginTop: '10px'
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '50px',
//     padding: '0 20px',
//     backgroundColor: '#f2f2f2',
//     marginTop: '0px'
//   },
//   brandContainer: {
//     display: 'flex',
//     alignItems:
const styles = {
  heading: {
    textAlign: 'center',
    fontSize: '30px',
    marginTop: '0px'
  },
  random:{
    display: 'block',
  height: '200px'
  },
  // last:{
  //   backgroundColor: hover ? "lightgray" : "white",
  //     cursor: "pointer"
  // },
  subHeading: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '10px'
  },
  qnabuttons:{
    textAlign: 'center',
     alignItems: 'center'
  },
  p3:{
    padding:'20px'
  },
  p:{
    fontFamily: '\'Segoe UI\'',
fontSize: '22',
lineHeight: '1.2',
color: '#000000',
margin: '0px',
textAlign: 'left'
  },
  hr:{
    marginTop: '1rem', marginBottom: '2rem', border: '0', borderTop: '1px solid rgba(0,0,0,.1)'
    //     border: '1px solid black',
    // width: '60%',
    // margin: '0 auto',
    // marginTop: '10px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    padding: '0 20px',
    backgroundColor: '#f2f2f2',
    marginTop: '0px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px 15px',
    cursor: 'pointer'
  },
  buttonsContainer: {
    display: 'flex'
  },
  button: {
    fontSize: '16px',
    padding: '10px 15px',
    cursor: 'pointer'
  },
  hover: {
    backgroundColor: '#ccc'
  },
  questionContainer: {
    // border: '1px solid black',
    // padding: '20px',
    // margin: '20px auto',
    // width: '50%',
    // borderRadius: '15px',
    // boxShadow: '5px 5px 10px #ccc',
    // textAlign: 'left'
    backgroundColor: '#ffffff', marginBottom: '30px', padding: '25px', borderRadius: '20px', boxShadow: '0 8px 6px -6px black', paddingBottom: '60px'
  },
  mydiv:{
    backgroundColor: '#f8f9fa', marginBottom: '30px', padding: '25px', borderRadius: '20px', boxShadow: '0 8px 6px -6px black', paddingBottom: '60px'
  },
  fixed:{
    backgroundColor: '#e9e9e9',
boxShadow: '0 10px 8px -6px black',
width: '100px',
// width:'84rem',
borderRadius: '25px 25px 0px 25px'
  },
  question: {
    fontSize: '22px',
    fontWeight:500
    // marginBottom: '10px',
    // textAlign: 'left'
  },
  answer: {
    fontSize: '18px',
    // marginBottom: '10px',
    // textAlign: 'left'
  },
  contact1:{
    marginTop: '25px',
minWidth: '193px',
height: '50px',
borderRadius: '25px',
background: 'black',
fontFamily: 'Montserrat-Bold',
fontSize: '15px',
lineHeight: '1.5',
color: '#ffffff',
// display: '-webkit-box',
// display: '-webkit-flex',
// display: '-moz-box',
// display: '-ms-flexbox',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
padding: '0 25px',
// WebkitTransition: 'all 0.4s',
// OTransition: 'all 0.4s',
// MozTransition: 'all 0.4s',
transition: 'all 0.4s'
  },
  likeContainer: {
    // display: 'flex',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 'auto',
marginLeft: 'auto',
paddingRight: '15px',
paddingLeft: '15px',
width: '30px',
display: 'flex'
  },
  likediv:{
    fontFamily: 'Tahoma, Verdana, Segoe, sans-serif',
    float:'left',
    height:'40px',
    // display:'flex',
    // justifyContent:'center'
  },
  likeEmoji: {
    fontSize: "1.5em"
  },
  likeButton:{
    position:'relative',
    top:'-5px',
    right:'13px',
    fontSize: '18px',
    marginRight:'10px',
    // paddingRight:'-100px',
    color: 'rgb(0, 0, 0)',
    // boxShadow: '0 6px 6px -6px black',
    backgroundColor: '#f7f7f7'
  },
  rest:{
    appearance: 'auto',
writingMode: 'horizontal-tb !important',
// fontStyle: '',
// fontVariantLigatures: '',
// fontVariantCaps: '',
// fontVariantNumeric: '',
// fontVariantEastAsian: '',
// fontWeight: '',
// fontStretch: '',
// fontSize: '',
// fontFamily: '',
textRendering: 'auto',
color: 'buttontext',
letterSpacing: 'normal',
wordSpacing: 'normal',
lineHeight: 'normal',
textTransform: 'none',
textIndent: '0px',
textShadow: 'none',
display: 'inline-block',
textAlign: 'center',
alignItems: 'flex-start',
cursor: 'default',
boxSizing: 'border-box',
backgroundColor: 'buttonface',
margin: '0em',
padding: '1px 6px',
borderWidth: '2px',
borderStyle: 'outset',
borderColor: 'buttonborder',
borderImage: 'initial',
outline: 'none !important',
border: 'none',
background: 'transparent',
MsTouchAction: 'manipulation',
touchAction: 'manipulation',
overflow: 'visible',
WebkitAppearance: 'button'
  },
  containerform:{
//     display: '-webkit-box',
// display: '-webkit-flex',
// display: '-moz-box',
// display: '-ms-flexbox',
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center'
  },
  likeCount: {
    marginLeft: "2.5em",
    position:'relative',
    left:'-2px',
    top:'-23px',
    // bottom:'10',
    // fontSize: "1.2em"
    fontFamily: 'Georgia, \'Times New Roman\', Times, serif',
fontSize: '20px',
color: 'rgb(0, 0, 0)',
paddingLeft: '10px'
  }
};  
  export default Navigation;
  
  
    
