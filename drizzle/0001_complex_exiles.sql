CREATE TABLE `works` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`client` varchar(255),
	`category` varchar(100),
	`imageUrl` text,
	`videoUrl` text,
	`detailedContent` text,
	`year` int,
	`workOrder` int DEFAULT 0,
	`isPublished` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `works_id` PRIMARY KEY(`id`)
);
