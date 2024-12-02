import React from 'react';
import Title from './Title';
import Block from './Block'
import buttjoint from '../images/buttjoint.png'
import herb from '../images/herb.jpeg'
import lapjoint from '../images/lapjoint.png'
import hammer from '../images/hammer.jpeg'
import spanner from '../images/spanner.jpeg'
import screwdriver from '../images/screwdriver.jpeg'
import BackToDashBoard from './BackToDashBoard';
import dovetail from '../images/dovetail.png'
import tenon from '../images/tenon.png'

const Carpentry = () => {
  const titleinfo1 = {
    text: 'Carpentry',
  };
  const titleinfo2 = {
    text: 'Tools for Carpentry',
  };
  const blockInfo1 = {
    text: 'Hammer',
    image: hammer,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo2 = {
    text: 'Spanner',
    image: spanner,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo3 ={
    text: 'Screwdriver',
    image: screwdriver,
    onClick: () => alert('Third Button'),
    info: "This is the tooltip text for the info icon",

  }

  return (
    <div>
      <Title titleInfo={titleinfo1} />
      <div  id="section1" className="header">
      <div className="align-btn">
        <BackToDashBoard />
      </div>
        <h3>What is Carpentry?</h3>
        <p>
        Carpentry is a skilled trade and a craft in which the primary work performed is 
        the cutting, shaping and installation of building materials during the construction
         of buildings, ships, timber bridges, concrete formwork, etc. Carpenters 
         traditionally worked with natural wood and did rougher work such as framing, 
         but today many other materials are also used[1] and sometimes the finer trades 
         of cabinetmaking and furniture building are considered carpentry. 
         In the United States, 98.5% of carpenters are male, and it was the fourth most
          male-dominated occupation in the country in 1999. 
        </p>
        
      </div>

      <div  id="section2" className="header">
        <h3>Benifits of  Carpentry?</h3>
            <ul>
            <li><strong>Job security:</strong> The construction industry is a vital part of the economy, so there is always a demand for skilled workers like carpenters. </li>
            <li><strong>Hands-on work: </strong>Carpentry is a skilled trade that offers the opportunity to do hands-on work, which can be highly satisfying. </li>
            <li><strong>Good pay:</strong> Carpenters can earn good wages because craft skills are in high demand. </li>
            <li><strong>Opportunities for advancement: </strong>Carpenters can advance their careers by taking on leadership roles, such as foreman or supervisor. </li>
            <li><strong>Creative freedom:</strong> Carpentry can be a rewarding career that offers creative freedom and job satisfaction. </li>
            <li><strong>Stress relief:</strong> Carpentry can be a great way to relax and unwind away from technology. </li>
            <li><strong>Sense of accomplishment: </strong>The hands-on nature of carpentry means that the results of your hard work are visible, which can give you a sense of accomplishment.</li> 
            <li><strong>Variety: </strong>No two days as a carpenter are ever the same. </li>
            <li><strong>Entry point into the construction industry: </strong>Carpentry can be a starting point for various roles in the construction industry, from residential to commercial, and from private to public.</li>
            </ul>
      </div>
      <div className="header" id="section3">

          <h3>Basic Steps Involved in Carpentry Work</h3>
          <ul>
          <li>
          <strong>Planning and Designing</strong>

          Understand the requirements of the project.
          Draw detailed sketches or plans.
          Choose appropriate wood types based on strength, durability, and aesthetic preferences.
          
          </li>

          <li>
          <strong>Measuring and Marking</strong>  
          Use tools like tape measures, rulers, and marking gauges.
          Accurately measure wood dimensions as per the design.
          Mark cutting and joining points clearly to avoid errors.
          
          </li>

          <li>
          <stromg>Cutting</stromg>
          Employ tools like hand saws, jigsaws, or table saws for cutting.
          Ensure straight and clean cuts using guides or clamps if needed.
          Sand the edges to remove splinters.
          
          </li>

          <li>
          <strong>Shaping and Carving</strong>  
          Use chisels, planes, and routers to refine shapes.
          Create decorative details as required for the project.
          Joining
          </li>

          <li>
          Fit pieces together using appropriate joint techniques (explained below).
          Use adhesives, screws, or nails to secure joints.
          
          </li>

          <li>
          <strong>Sanding and Finishing</strong>  
          Smooth the wood surface with sandpaper or electric sanders.
          Apply finishes like varnish, paint, or polish to protect and enhance the appearance of the wood.
          
          </li>

          <li>

          </li>
          <strong>Inspection and Assembly</strong>
          Inspect for structural stability and aesthetic quality.
          Assemble all components and ensure they fit well.
          </ul>
          <div className="image-align">
          <iframe width="672" height="378" src="https://www.youtube.com/embed/m3CqH4DjVlI" title="15 woodworking basics you should know" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="756" height="378" src="https://www.youtube.com/embed/Ls1ayLoDedI" title="Beginner Woodworking and Carpentry Terminology Part 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>  
      </div>
    <div id="section4" className="pgrid">
        <div  class="header1">
            <h2>Butt Joint</h2>
            <ul>
              <li>Simplest type; two pieces are joined end to end or edge to edge.</li>
              <li>Often reinforced with nails, screws, or dowels.</li>
              <li>Commonly used for temporary structures.</li>

            </ul>  
            <div className="image-align">
                    <img src={buttjoint} alt="Box content" className="block-image" />
                  
            </div>
            
        </div>
        <div  class="header1">
        <iframe width="672" height="378" src="https://www.youtube.com/embed/bqEiXN-Bq9U" title="Butt Joint - Joint of the Week" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </div>
    </div>  
    <div id="section5" className="pgrid">
        <div  class="header1">
        <h2>Lap Joint</h2>
            <ul>
                <li>One piece of wood overlaps another.</li>
                <li>Subtypes: Full lap, half lap, and cross lap.</li>
                <li>Used in frame construction and furniture.</li>

            </ul>  
            <div className="image-align">
                    <img src={lapjoint} alt="Box content" className="block-image" />
                  
            </div>
            
        </div>
        <div  class="header1">
        <iframe width="672" height="378" src="https://www.youtube.com/embed/OU_i8I-007c" title="How To Make A Half-Lap Joint - WOOD magazine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </div>
    </div> 
    <div id="section6" className="pgrid">
        <div  class="header1">
            <h2>Dovetail Joint</h2>
            <ul>
            <li>Interlocking fan-shaped wedges provide strong connections.</li>
            <li>Common in drawer construction and cabinetry.</li>

            </ul>  
            <div className="image-align">
                    <img src={dovetail} alt="Box content" className="block-image" />
                  
            </div>
            
        </div>
        <div  class="header1">

        <iframe width="672" height="378" src="https://www.youtube.com/embed/MOB3DyZp1yk" title="How to Cut a DOVETAIL JOINT with Hand Tools (Quick Version)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>  
    <div id="section7" className="pgrid">
        <div  class="header1">
        <h2>Mortise and Tenon Jointt</h2>
            <ul>
                <li>One piece has a hole (mortise) while the other has a projection (tenon).</li>
                <li>Known for its strength and durability.</li>
                <li>Used in traditional furniture and framing.</li>

            </ul>  
            <div className="image-align">
                    <img src={tenon} alt="Box content" className="block-image" />
                  
            </div>
            
        </div>
        <div  class="header1">

        <iframe width="672" height="378" src="https://www.youtube.com/embed/bm36OJTL08I" title="How to Make Simple Mortise &amp; Tenon Joints" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>  

   
    <div id="tools">
      <Title titleInfo={titleinfo2} />
    <div className='dashboard'>
      <Block boxInfo={blockInfo1} />
      <Block boxInfo={blockInfo2} />
      <Block boxInfo={blockInfo3} />

    </div>
    </div>

    <div className="table-of-contents">
        <h4>Table of Contents</h4>
        <a href="#section1">What is Carpentry?</a>
        <a href="#section2">Benefits of Carepntry</a>
        <a href="#section3">Basic Steps Involved in Carpentry Work</a>
        <a href="#section4">Butt Joint</a>
        <a href="#section5">Lap Joint</a>
        <a href="#section6">Dovetail Joint</a>
        <a href="#section7"> Mortise  and Tenon Joint</a>
        <a href="#tools">Tools for Carpentry</a>


      </div>
      
    </div>
  );
};
export default Carpentry;