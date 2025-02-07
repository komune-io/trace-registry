import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Config
import com.meilisearch.sdk.json.JacksonJsonHandler
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

class MeiliSearchTest {

    // Change these values if your MeiliSearch instance is different.
    private val meiliSearchHost = "http://127.0.0.1:7700"
    private val apiKey = "your_master_key_here" // Replace with your API key if necessary
    val objectMapper = jacksonObjectMapper()
    val config = Config(
        meiliSearchHost, apiKey
    )
    private val client = Client(config)
    private val indexUid = "test-index-3"

    @BeforeEach
    fun setup() {
        // Cleanup: try to delete the test index if it already exists.
        try {
            client.deleteIndex(indexUid)
        } catch (ex: Exception) {
            // Ignore if the index does not exist.
        }
        // Create a new index with the primary key "id"
        client.createIndex(indexUid)
    }

    @AfterEach
    fun cleanup() {
        try {
            client.deleteIndex(indexUid)
        } catch (ex: Exception) {
            // Ignore any errors during cleanup.
        }
    }

    @Test
    fun `create index, add a document, and search it`() {
        // Retrieve the index object.
        val index = client.index(indexUid)
        val id =  "E-84-en_en"
        // Define a document to add.
        val document = TestData(
            id = id,
            title = "Hello, MeiliSearch!",
            content = "This is a test document."
        )
        val jsonString = objectMapper.writeValueAsString(listOf(document))
        // Add the document to the index. The addDocuments method returns a task.
        val addTask = index.addDocuments(jsonString)
        // Wait for the task to be processed (indexing is asynchronous).
        client.waitForTask(addTask.taskUid)


        val tt = index.getDocument(id, TestData::class.java)
        assertNotNull(tt)
        // Search for the document using a query that matches the title.
        val searchResult = index.search("Hello")

        // Verify that at least one document was returned.
        assertTrue(searchResult.hits.isNotEmpty(), "Expected at least one search result.")

        // Cast the first hit as a map to check its fields.
        val firstHit = searchResult.hits.first() as Map<*, *>
        assertEquals("Hello, MeiliSearch!", firstHit["title"])
        assertEquals("This is a test document.", firstHit["content"])
    }
}


data class TestData(val id: String, val title: String, val content: String)
