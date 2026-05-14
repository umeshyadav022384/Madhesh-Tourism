from embeddings.embedding_model import EmbeddingModel


class VectorGenerator:

    def __init__(self):

        self.embedding_model = EmbeddingModel()

    def generate_vectors(self, chunked_data):
        """
        Generate embeddings for all chunks
        """

        vector_documents = []

        # Extract all texts
        texts = [item["text"] for item in chunked_data]

        print("Generating embeddings...")

        # Batch embedding (faster)
        embeddings = self.embedding_model.create_embeddings_batch(texts)

        # Combine chunk + embedding
        for item, embedding in zip(chunked_data, embeddings):

            vector_document = {

                "id": item["id"],

                "text": item["text"],

                "embedding": embedding,

                "metadata": item["metadata"]
            }

            vector_documents.append(vector_document)

        print("Embeddings generated")

        return vector_documents