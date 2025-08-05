package com.hana7.springdemo.jpa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.SearchCond;
import com.hana7.springdemo.jpa.dto.UploadRequestDTO;
import com.hana7.springdemo.jpa.service.MemberService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/members")
public class MemberController {
	private final MemberService service;
	@Value("${upload.path}")
	private String uploadPath = "src/main/resources";

	public MemberController(MemberService service) {
		this.service = service;
	}

	@Tag(name = "file upload")
	@Operation(summary = "Upload POST Member")
	@PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public String upload(UploadRequestDTO dto) {
		log.info("upfileDTO={}", dto);
		if (dto.getFiles() != null) {
			dto.getFiles().forEach(MultipartFil file -> {
				String orgFrame = file.getOrga
			});
		}

		return "File Upload!";
	}

	@GetMapping()
	@Tag(name = "회원 목록", description = "회원 페이징 목록")
	@Operation(summary = "/members?page=1...", description = "회원목록")
	List<MemberDTO> findMembers(
		@Parameter(example = """
			{
				"page": 1,
				"size": 5,
				"searchNickname": "x",
				"searchEmail:: null,
				"sortField": "id",
				"sortDirection" : "asc"
			}
			""")
		SearchCond searchCond) {
		System.out.println("searchCond = " + searchCond.getPager());
		return service.findAll(searchCond);
	}

	@GetMapping("{id}")
	@Tag(name = "회원 상세")
	@Operation(summary = "/members/2", description = "회원 작성된 글 포함")
	@Parameters({
		@Parameter(name = "id", description = "회원 번호", example = "2"),
	})
	MemberDTO getMember(@PathVariable Long id) {
		return service.findOne(id);
	}

	@DeleteMapping("{id}")
	@Tag(name = "회원삭제")
	@Operation(summary = "delect member", description = "회원 어캐 삭제드라")
	long remove(@PathVariable Long id) {
		return service.remove(id);
	}
}
