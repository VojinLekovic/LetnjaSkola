const deleteX = document.querySelectorAll('.delete-button');

deleteX.forEach(button => {
    button.addEventListener('click', function(){
        const listItem = this.parentElement;
        listItem.remove();
    })
});

const addItemForm = document.getElementById('addItemForm');
        const itemList = document.getElementById('itemList');

        addItemForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission to a server

            const itemText = document.getElementById('itemText').value;
            if (itemText.trim() !== '') {
                // Create a new list item
                const newItem = document.createElement('li');
                newItem.className = 'list-item';
                newItem.textContent = itemText;

                // Create a delete button for the new item
                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.textContent = 'X';

                // Add a click event listener to remove the new item
                deleteButton.addEventListener('click', function () {
                    newItem.remove();
                });

                // Append the delete button to the new item
                newItem.appendChild(deleteButton);

                // Append the new item to the list
                itemList.appendChild(newItem);

                // Clear the input field
                document.getElementById('itemText').value = '';
            }
        });

        const currentTime = () => {

            const element = document.querySelector("h2");
        
        
            let date = new Date();
                h = date.getHours();
                m = date.getMinutes();
                s = date.getSeconds();
        
        
            let day;
                day = h < 12 ? "AM" : "PM";
                h = h > 12 ? h-12 : h;
                h = h == 0 ? (h=12) : h; 
        
            h = h<10 ? "0" + h : h;
            m = m<10 ? "0" + m : m;
            s = s<10 ? "0" + s : s;
            
            element.textContent = h+":"+m+":"+s+" "+day;
        };
        currentTime();
        setInterval(currentTime, 1000);

