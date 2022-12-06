

# Query

Type: `TaskPageQueryDTO`

Query to get a list of tasks.

  
<article>

***contactName*** `String?` 

Search on the name of the contact of the tasks.

</article>
<article>

***contactRole*** `String?` 

Type of contact of the tasks.

</article>
<article>

***friendlyId*** `String?` 

Search on the friendlyId of the tasks.

</article>
<article>

***ids*** `List<TaskId>?` 

Identifier of the tasks.

</article>
<article>

***orderBy*** `List<SortDTO>?` 

Page sort settings?

</article>
<article>

***page*** `Int?` 

Index of the page to return.

</article>
<article>

***size*** `Int?` 

Size of the page to return.

</article>
<article>

***status*** `TaskStatusDTO?` 

Status of the tasks.

</article>
<article>

***supervisorId*** [`UserId?`](/docs/userid--page#userid) 

Supervisor of the tasks.

</article>
<article>

***types*** `List<TaskTypeDTO>?` 

Types of the tasks.

</article>

