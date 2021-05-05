DROP DATABASE UNIPROT;

CREATE DATABASE UNIPROT;
USE UNIPROT;

CREATE TABLE Organism(
	taxID int  NOT NULL,
	scientific_name varchar(60) NULL, 
	mnemonic varchar(60) NULL, 
	taxonomy_navigation varchar(1000) NULL, 
		PRIMARY KEY (taxID)
);

CREATE TABLE Sequence(
	seq_id varchar(10)  NOT NULL,
	length int NOT NULL,
	mass double NOT NULL,
	last_date date NOT NULL,
	checksum varchar(30)  NOT NULL,
	sequence varchar(10000) NOT NULL,
		PRIMARY KEY (seq_id)	
);

CREATE TABLE Protein_classification( 
	Prosite_ID varchar(20) NOT NULL,
    Family varchar(50) NOT NULL, 
	Subfamily varchar(30) NULL,
		PRIMARY KEY (Prosite_ID)
);

CREATE TABLE Protein(
	accession_number varchar(10)  NOT NULL,
	seq_id varchar(10)  NOT NULL,
	Prosite_ID varchar(50) NOT NULL, 
	prev_acc_numbers varchar(10) NULL, 
	entry_name varchar(20)  NOT NULL, 
	full_name varchar(100)  NOT NULL,
	short_name varchar(100) NULL,
	reviewed boolean, 
	integrated varchar(60) NULL,
	first_date date NOT NULL, 
	last_date date NOT NULL,
	pfunction varchar(1000) NULL,
	proteomes varchar(40) NULL,
		PRIMARY KEY (accession_number),
		CONSTRAINT fk1_protein FOREIGN KEY (seq_id) REFERENCES Sequence(seq_id) ON DELETE CASCADE ON UPDATE CASCADE,
		CONSTRAINT fk2_protein FOREIGN KEY (Prosite_ID) REFERENCES Protein_classification(Prosite_ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Gene( 
	gene_name varchar(40)  NOT NULL,
	taxID int  NOT NULL,
   	accession_number varchar(10)  NOT NULL,
    ORF_name varchar(40)  NULL,
	synonym varchar(40)  NULL,
		PRIMARY KEY (gene_name),
		CONSTRAINT fk1_gene FOREIGN KEY (taxID) REFERENCES Organism(taxID) ON DELETE CASCADE ON UPDATE CASCADE,
		CONSTRAINT fk2_gene FOREIGN KEY (accession_number) REFERENCES Protein(accession_number) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Protein_Organism( 
	accession_number varchar(10)  NOT NULL,
	taxID int  NOT NULL,
		CONSTRAINT fk1_protorg FOREIGN KEY (accession_number) REFERENCES Protein(accession_number) ON DELETE CASCADE ON UPDATE CASCADE,
		CONSTRAINT fk2_protorg FOREIGN KEY (taxID) REFERENCES Organism(taxID) ON DELETE CASCADE ON UPDATE CASCADE
);
