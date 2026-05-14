class TextChunker:

    def __init__(self, chunk_size=300):

        self.chunk_size = chunk_size

    def split_text(self, text):
        """
        Split text into smaller chunks
        """

        words = text.split()

        chunks = []

        for start in range(0, len(words), self.chunk_size):

            end = start + self.chunk_size

            chunk_words = words[start:end]

            chunk_text = " ".join(chunk_words)

            chunks.append(chunk_text)

        return chunks

    def create_text(self, item):
        """
        Convert item into searchable text
        """

        text_parts = []

        # Skip unnecessary fields
        skip_fields = ["metadata", "source_file"]

        for key, value in item.items():

            if key in skip_fields:
                continue

            # Convert list into text
            if isinstance(value, list):

                value = ", ".join(value)

            text_parts.append(f"{key}: {value}")

        return "\n".join(text_parts)

    def process_data(self, data):
        """
        Process all data into chunks
        """

        all_chunks = []

        for item_index, item in enumerate(data):

            # Create searchable text
            text = self.create_text(item)

            # Split text
            chunks = self.split_text(text)

            for chunk_index, chunk in enumerate(chunks):

                chunk_data = {

                    "id": f"doc_{item_index}_chunk_{chunk_index}",

                    "text": chunk,

                    "chunk_id": chunk_index,

                    "metadata": item.get("metadata", {})
                }

                all_chunks.append(chunk_data)

        return all_chunks