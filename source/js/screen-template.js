const screenTemplate = (block) =>
`<section class="questions">
   <form class="questions__form" method="post" enctype="multipart/form-data" action="https://js.dump.academy/keksobooking" autocomplete="off">
     <fieldset class="notice__header">
       <div class="questions__item">${block[0].offer.title}</div>
       <label for="answer">Ваш ответ:</label>
       <input type="text" id="answer" class="questions__answer">
       <button type="submit" class="questions__submit">отправить ответ</button>
       <button type="reset" class="questions__reset">очистить</button>
   </fieldset>
  </form>
</section>`

export default screenTemplate;

