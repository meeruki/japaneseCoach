const screenTemplate = (block) =>
`<section class="questions">
   <form class="questions__form" method="post" enctype="multipart/form-data" action="https://js.dump.academy/keksobooking" autocomplete="off">
     <fieldset class="notice__header">
       <div class="questions__item">${block.description}</div>
       <label for="answer">Your answer:</label>
       <input type="text" id="answer" class="questions__answer">
       <button type="submit" class="questions__submit">send</button>
       <button type="reset" class="questions__reset">clear</button>
   </fieldset>
  </form>
</section>`

export default screenTemplate;

