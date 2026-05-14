from embeddings.vector_generator import VectorGenerator
from embeddings.embedding_cache import EmbeddingCache


def main():

    # Example: your chunked data from previous step
    from scripts.test_processing import chunk_document  # or load from function

    # Step 1: create vector generator
    generator = VectorGenerator()

    # Step 2: generate embeddings
    vectors = generator.generate_vectors(chunk_document)

    # Step 3: cache them (save to disk)
    cache = EmbeddingCache()
    cache.save_embeddings(vectors)

    print("Embedding pipeline completed!")


if __name__ == "__main__":
    main()