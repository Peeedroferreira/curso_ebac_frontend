$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#new-task').val();
        var taskDate = $('#task-date').val();
        var taskTime = $('#task-time').val();

        if (taskName && taskDate && taskTime) {
            var dateTime = new Date(taskDate + 'T' + taskTime);
            var dateHeader = dateTime.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            var timeString = dateTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            // Verifica se já existe um grupo para esta data
            var dateGroup = $(`#tasks-container > div[data-date="${taskDate}"]`);
            if (dateGroup.length === 0) {
                dateGroup = $('<div></div>', {
                    "data-date": taskDate,
                    html: `<h2 class="task-date-header">${dateHeader}</h2><ul class="tasks-list"></ul>`
                });
                $('#tasks-container').append(dateGroup);
            }
            var newTask = $('<li></li>').text(`${timeString} - ${taskName}`).click(function() {
                $(this).toggleClass('completed');
                if ($(this).hasClass('completed')) {

                    $(this).append(' (TAREFA CONCLUÍDA)');
                } else {
            
                    $(this).text(`${timeString} - ${taskName}`);
                }
            });
            dateGroup.find('.tasks-list').append(newTask);
            $('#new-task').val('');
            $('#task-date').val('');
            $('#task-time').val('');
        }
    });

    $('#clear-tasks').click(function() {
        $('#tasks-container').empty();
    });
});
