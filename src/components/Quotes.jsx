const Quotes = ({ data, onClick }) => {
return (
  <div className='text'>
<p> <i class="fas fa-quote-left "></i></p>
<h2>{data.text}</h2>
<h3>{data.author ? `- ${data.author}` : ""}</h3>
<div className='btn'>
<button onClick={onClick}>Next Quotes</button>
<a href="https://twitter.com/" target="_blank">
               <i className="fab fa-twitter-square "></i>
            </a>
</div>
</div>
)
};

export default Quotes;