from sentence_transformers import SentenceTransformer
class EmbeddingModel:
    def __init__(self):
        #light weight and fast model
        self.model_name="all-MiniLM-L6-v2"
        print("model is loading")
        self.model=SentenceTransformer(self.model_name)
        print("enbedding model loader")
    def create_embeddings(self, text):
        #convert single text into vector
        embedding=self.model.encode(text)
        return embedding.tolist()
    
    def create_embeddings_batch(self, texts):
        #convert multiple text into vector
        embedding=self.model.encode(texts)
        return embedding.tolist()        
