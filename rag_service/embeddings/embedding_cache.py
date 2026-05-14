import json
import os


class EmbeddingCache:

    def __init__(self, cache_folder="cache"):

        self.cache_folder = cache_folder

        os.makedirs(self.cache_folder, exist_ok=True)

    def save_embeddings(self, vector_data, filename="embeddings.json"):
        """
        Save embeddings into file
        """

        file_path = os.path.join(self.cache_folder, filename)

        with open(file_path, "w", encoding="utf-8") as file:

            json.dump(vector_data, file, indent=4)

        print("Embeddings saved")

    def load_embeddings(self, filename="embeddings.json"):
        """
        Load saved embeddings
        """

        file_path = os.path.join(self.cache_folder, filename)

        if not os.path.exists(file_path):

            return None

        with open(file_path, "r", encoding="utf-8") as file:

            data = json.load(file)

        print("Embeddings loaded from cache")

        return data