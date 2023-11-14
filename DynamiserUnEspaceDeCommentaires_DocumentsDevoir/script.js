document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour ajouter un commentaire
    function addComment() {
      // Ensuite on va récuperer les valeurs des champs
      var firstName = document.getElementById('first-name').value;
      var lastName = document.getElementById('last-name').value;
      var message = document.getElementById('message').value;

      // On vérifie si les champs sont vides
      if (firstName === '' || lastName === '' || message === '') {
        document.getElementById('error-message').style.display = 'block';
        return;
      }

      // On cache le message d'erreur s'il était affiché
      document.getElementById('error-message').style.display = 'none';

      // On crée un nouvel élément de commentaire
      var newComment = document.createElement('div');
      newComment.className = 'flex space-x-4 text-sm text-gray-500';

      newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;

      // On ajoute le nouveau commentaire à la liste
      document.getElementById('comment-list').appendChild(newComment);

      // On efface le contenu des champs du formulaire
      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('message').value = '';
    }

    // On ajoute un gestionnaire d'événement au bouton d'envoi + on empêche le formulaire de se soumettre normalement et on appelle la fonction pour ajouter un commentaire
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); 
      addComment(); 
    });
  });